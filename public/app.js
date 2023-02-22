const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const endSessionBtn = document.getElementById('end-session-btn');

const BASE_URL = 'https://c005-122-173-30-84.ngrok.io/'
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
}


// Capture user input events
document.addEventListener('click', function (event) {
    // Send user input data to server
    event.preventDefault()
    console.log("Click Event =>>>", event.target.id, new Date())
    trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.CLICK, name: event.target.tagName, elemId: event.target.id })
});

// Capture changes in browser history
window.onpopstate = function (event) {
    trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.URL, name: event.state.url, })
    console.log("URL change Event =>>>", event.state.url, new Date())
};

const hanldeSubmit = (e) => {
    e.preventDefault()
}

// Track mouse movements
document.addEventListener('mousemove', (event) => {
    trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.MOUSE, x: event.pageX, y: event.pageY, })
});

// Track input on form fields
const formFields = document.querySelectorAll('input, textarea');

formFields.forEach((field) => {
    field.addEventListener('input', (event) => {
        console.log('Input changed:', field.name, field.value);
        trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.INPUT, name: field.name, value: field.value, elemId: event.target.id })
    });
});

endSessionBtn.addEventListener('click', async (e) => {

    e.preventDefault()
    const duration = new Date().getTime() - startTime
    console.log("duration", duration);

    fetch(BASE_URL + 'sessionend', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: trackingArr, duration })
    }).catch((err) => {
        console.log("err", err.code, err.message);
        // alert('Something went Wrong')
    })

    document.removeEventListener('mousemove')
    document.removeEventListener('click')
    trackingArr = []
})





