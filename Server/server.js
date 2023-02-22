const express = require('express')
const puppeteer = require('puppeteer');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require('fs');

const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url, req.body, req.params)
    next()
})

app.get("/", (req, res) => {
    res.send("Website Tracking test Server")
})

const _wait = (delay = 200) => new Promise(resolve => setTimeout(resolve, delay))


app.get("/record", async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const recorder = new PuppeteerScreenRecorder(page);
        await recorder.start('./report/video/simple.mp4'); // supports extension - mp4, avi, webm and mov
        await page.goto('http://127.0.0.1:5500/RecordTracking/index.html');

        await _wait(15000)

        await recorder.stop();
        await browser.close();
        console.log("here ->>>>");
        res.sendFile(__dirname + '/report/video/simple.mp4')

    } catch (err) {
        console.log("err", err);
        res.send("Error in Recording Session ", JSON.stringify(err))
    }
})



app.listen(3000, () => {
    console.log("Server is running at 3000")
})