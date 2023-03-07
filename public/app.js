const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const endSessionBtn = document.getElementById('end-session-btn');

const BASE_URL = 'http://7174-122-173-24-198.ngrok.io'
let trackingArr = []
let startTime;

const EVENT_TYPES = {
    CLICK: 'click',
    MOUSE: 'mouse',
    URL: 'url',
    INPUT: 'input'
}

window.onload = init

function init() {
    startTime = new Date().getTime()
    // captureDom()

    const interval1 = setInterval(captureDom, interval);

    setTimeout(() => {
        clearInterval(interval1)
    }, 10000)
}

// Define the interval (in milliseconds) between captures
const interval = 1000;

// Define the key to use for the local storage item
const storageKey = 'domHistory';

// Initialize an array to hold the captured DOMs
let domHistory = [];

// Define a function to capture the DOM and save it to the array and local storage
async function captureDom() {
    // Fetch the external CSS files and convert them to inline styles
    const cssUrls = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
    const cssPromises = cssUrls.map(url => fetch(url).then(res => res.text()));
    const cssTexts = await Promise.all(cssPromises);
    const inlineStyles = cssTexts.map(cssText => `<style>${cssText}</style>`).join('');

    // Capture the HTML of the page and include the inline styles
    const dom = document.documentElement.outerHTML;
    const domWithStyles = `${dom.replace(/<\/head>/i, `${inlineStyles}</head>`)}`
    domHistory.push(domWithStyles);
    localStorage.setItem(storageKey, JSON.stringify(domHistory));
}

// Call the captureDom() function every 2 seconds


// Capture user input events
// document.addEventListener('click', function (event) {
//     // Send user input data to server
//     event.preventDefault()
//     console.log("Click Event =>>>", event.target.id, new Date())
//     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.CLICK, name: event.target.tagName, elemId: event.target.id })
// });

// // Capture changes in browser history
// window.onpopstate = function (event) {
//     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.URL, name: event.state.url, })
//     console.log("URL change Event =>>>", event.state.url, new Date())
// };

// const hanldeSubmit = (e) => {
//     e.preventDefault()
// }

// // Track mouse movements
// document.addEventListener('mousemove', (event) => {
//     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.MOUSE, x: event.pageX, y: event.pageY, })
// });

// // Track input on form fields
// const formFields = document.querySelectorAll('input, textarea');

// formFields.forEach((field) => {
//     field.addEventListener('input', (event) => {
//         console.log('Input changed:', field.name, field.value);
//         trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.INPUT, name: field.name, value: field.value, elemId: event.target.id })
//     });
// });

// endSessionBtn.addEventListener('click', async (e) => {

//     e.preventDefault()
//     const duration = new Date().getTime() - startTime
//     console.log("duration", duration);

//     fetch(BASE_URL + 'sessionend', {
//         method: 'post',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ data: trackingArr, duration })
//     }).catch((err) => {
//         console.log("err", err.code, err.message);
//         // alert('Something went Wrong')
//     })

//     document.removeEventListener('mousemove')
//     document.removeEventListener('click')
//     trackingArr = []
// })

/**
 * Image size is Approx 32kb
 */

// document.getElementById('capture').addEventListener('click', function () {
//     html2canvas(document.body).then(function (canvas) {
//         document.body.appendChild(canvas);

//         // Convert canvas to data URL
//         var dataURL = canvas.toDataURL();

//         // Send data URL to server
//         fetch('/uploadfile', {
//             method: 'POST',
//             body: JSON.stringify({ dataURL: dataURL }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(function (response) {
//             console.log('Screenshot saved');
//         });

//     });
// });


/**
 * Image size is Approx 16KB
 */

document.getElementById('capture').addEventListener('click', function () {
    html2canvas(document.body).then(function (canvas) {
        sendCanvasToApi(canvas)
        // // Convert canvas to data URL
        // canvas.toBlob((blob) => {
        //     // Send data URL to server
        //     fetch('/save-file', {
        //         method: 'POST',
        //         // body: JSON.stringify({ dataURL: dataURL }),
        //         body: blob,
        //         headers: {
        //             'Content-Type': 'application/octet-stream'
        //         }
        //     }).then(function (response) {
        //         console.log('Screenshot saved');
        //     });
        // }, 'image/jpeg', 50);
    });
});

function sendCanvasToApi(canvas) {
    canvas.toBlob((blob) => {
        // Send data URL to server
        fetch('/save-file', {
            method: 'POST',
            // body: JSON.stringify({ dataURL: dataURL }),
            body: blob,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        }).then(function (response) {
            console.log('Screenshot saved');
        });
    }, 'image/jpeg', 50);
}

// const observer = new MutationObserver(() => {
//     const element = document.documentElement;
//     // html2canvas(element).then(canvas => {
//     console.log("___________");
//     // sendCanvasToApi(canvas)
//     // const screenshot = canvas.toDataURL();
//     // axios.post('https://example.com/api/screenshots', { screenshot });
//     // });
// });

// observer.observe(document.documentElement, {
//     childList: true,
//     subtree: true,
//     attributes: true,
//     characterData: true,
// });


