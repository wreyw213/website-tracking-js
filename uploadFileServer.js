// const express = require('express')
// var bodyParser = require('body-parser')
// var multer = require('multer');
// var admin = require("firebase-admin");

// var serviceAccount = require("./firebase_key.json");

// const app = express()

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(bodyParser.json())

// app.use((req, res, next) => {
//     console.log(req.method, req.url, req.body)
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next()
// })

// app.get("/server", (req, res) => {
//     res.send("Website Tracking test Server")
// })

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: 'gs://notificationtest-69b51.appspot.com/'
// });

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//         fileSize: 5 * 1024 * 1024 // file size this is in MB (5)
//     }
// });

// const bucket = admin.storage().bucket();


// app.post('/upload', upload.single('file'), async (req, res) => {
//     try {
//         const file = req.file;

//         if (!file) {
//             throw new Error('Please upload a file');
//         }

//         const filename = `${Date.now()}-${file.originalname}`;
//         const blob = bucket.file(filename);

//         const stream = blob.createWriteStream({
//             metadata: {
//                 contentType: file.mimetype
//             },
//             predefinedAcl: 'publicRead' // Set file access to public-read
//         });

//         stream.on('error', (error) => {
//             throw new Error(error);
//         });

//         stream.on('finish', async () => {
//             const url = `https://storage.googleapis.com/${bucket.name}/${filename}`;

//             res.status(200).send({
//                 message: 'File uploaded successfully',
//                 url
//             });
//         });

//         stream.end(file.buffer);
//     } catch (error) {
//         res.status(500).send({
//             message: 'An error occurred while uploading the file',
//             error: error.message
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log("Server is running at 3000")
// })


