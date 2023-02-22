const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const endSessionBtn = document.getElementById('end-session-btn');

let trackingArr = []

const EVENT_TYPES = {
    CLICK: 'click',
    MOUSE: 'mouse',
    URL: 'url',
    INPUT: 'input'
}


// Capture user input events
document.addEventListener('click', function (event) {
    // Send user input data to server
    console.log("Click Event =>>>", event.target.id, new Date())
    trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.CLICK, name: event.target.tagName, elemId: event.target.id })
});

// Capture changes in browser history
window.onpopstate = function (event) {
    trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.URL, name: event.state.url, })
    console.log("URL change Event =>>>", event.state.url, new Date())
};


// Track mouse movements
document.addEventListener('mousemove', (event) => {
    console.log('Mouse moved=>>>>>', event.pageX, event.pageY);
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

endSessionBtn.addEventListener('click', () => {
    localStorage.setItem('trackingUserDetails', JSON.stringify(trackingArr))
})





