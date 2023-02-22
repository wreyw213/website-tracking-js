const express = require('express')
const puppeteer = require('puppeteer');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

const TRACKIGN_RECORD_URL = 'http://127.0.0.1:5500/public/RecordTracking/index.html'

ffmpeg.setFfmpegPath(ffmpegPath);

const fs = require('fs');

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url, req.params)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.get("/server", (req, res) => {
    res.send("Website Tracking test Server")
})

app.use(express.static(__dirname + '/public'));

const _wait = (delay = 200) => new Promise(resolve => setTimeout(resolve, delay))

app.post("/sessionend", (req, res) => {
    try {
        const { data, duration } = req.body
        console.log("data->>>>", data.length, duration);
        // file system module to perform file operations
        var jsonContent = JSON.stringify(data);

        fs.writeFile(__dirname + "/report/data/trackData.json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                res.send({ message: 'Error Occcured', status: 400 })
                return
            }
            fs.writeFile(__dirname + "/report/data/duration.sd", JSON.stringify(duration), (error) => {
                if (error) {
                    console.log("An error occured while writing JSON Object to File.", err);
                    res.send({ message: 'An error occured while writing JSON Object to File.', status: 400 })
                    return
                }
                res.sendStatus(200)
                startRecording()
            })
        });
    } catch (err) {
        console.log("error->>>>>", err);
        res.send({ message: 'true', status: 500 })
    }
})


app.post('/gettrackingdata', (req, res) => {
    fs.readFile(__dirname + "/report/data/trackData.json", (err, data) => {
        if (err) {
            res.send({ message: 'error while getting file', status: 400 })
            return
        }
        res.send({ message: 'latest tracking data get seuccfully', data: JSON.parse(data) })
    })

})

const startRecording = () => {
    try {
        const timeStamp = new Date().getTime()
        fs.readFile(__dirname + "/report/data/duration.sd", async (err, data) => {
            if (err) {
                console.log("err", err);
                return
            }
            const dur = JSON.parse(data)

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const recorder = new PuppeteerScreenRecorder(page);
            await recorder.start(`./report/video/${timeStamp}.mp4`); // supports extension - mp4, avi, webm and mov
            await page.goto(TRACKIGN_RECORD_URL);

            await _wait(dur)

            await recorder.stop();
            await browser.close();
            console.log("here ->>>>");
        })

    } catch (err) {
        console.log("err", err);
    }
}

app.get("/record", async (req, res) => {
    try {
        fs.readFile(__dirname + "/report/data/duration.sd", async (err, data) => {
            if (err) {
                console.log("err", err);
                res.send({ message: 'an error occured' })
                return
            }
            const dur = JSON.parse(data)
            console.log("duration", data, typeof data, dur, typeof dur);

            const timeStamp = new Date().getTime()
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const recorder = new PuppeteerScreenRecorder(page);
            await recorder.start(`./report/video/${timeStamp}.mp4`); // supports extension - mp4, avi, webm and mov
            await page.goto('https://c005-122-173-30-84.ngrok.io/RecordTracking/');

            await _wait(dur)

            await recorder.stop();
            await browser.close();
            console.log("here ->>>>");
            res.send({ message: 'Video Recorded SuccesFully', status: 200 })
        })

    } catch (err) {
        console.log("err", err);
        res.send("Error in Recording Session ", JSON.stringify(err))
    }
})

app.get("/video/:name?", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
        return
    }
    const name = req.params.name || 'simple.mp4'
    const videoPath = __dirname + `/report/video/${name}`;
    const videoSize = fs.statSync(__dirname + `/report/video/${name}`).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.get("/allVideos", (req, res) => {
    fs.readdir(__dirname + "/report/video", (err, files) => {
        if (err) {
            res.send({ message: err, status: 400 })
        } else {
            console.log('Files in directory:');
            files.forEach((file) => {
                console.log(file);
            });
            res.send({ message: 'data get successfully', data: files })
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running at 3000")
})



// const appendData = (value) => {
//     const filePath = __dirname + "/data.txt";

//     const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
//     writeStream.write(value.toString() + "\n");
//     writeStream.end();

//     writeStream.on('finish', () => {
//         console.log('Data appended to the file successfully.', value);
//     });

//     writeStream.on('error', (err) => {
//         console.error(err);
//     });
// }