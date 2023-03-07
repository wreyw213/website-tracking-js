const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const endSessionBtn = document.getElementById('end-session-btn');
// import data from './data.json'
const BASE_URL = 'https://c005-122-173-30-84.ngrok.io/'
const displayElement = document.getElementById('captured-dom');



var x, y;
var px, py;
px = py = 0;

// Image of cursor
var cursor = document.getElementById("cursor");

var mutex = false;

let trackingArr = []

const EVENT_TYPES = {
    CLICK: 'click',
    MOUSE: 'mouse',
    URL: 'url',
    INPUT: 'input'
}

window.onload = getTrackDataApi

async function getTrackDataApi() {
    var image = new Image();
    const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVQ4T43TsUoDQRSF4T8EkVcAPJiBUhCQ9GR1E0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ06an/2U1BPEU/PT6U+nh6Uubq6TqN6ejow9eN/YdlL1zq3q3o/XyFrldLLiCNYh1YRQ1CvGZLzX0fE/BhOarW0ie5zHQth5Q1d0NFHw4W8ItvAV1MX9Xtuv9zPpVus/tm+HwYJlWH8grlv/2V9tdNzxnH+V7fnJxNk00I7+T3Tq3W7zh8XFvALlfX9ynUvvAYs2fljbfpU6JjU6R0fJlKVL+hO28ibyGztvP9o9/HKz/X1lJzLgIpf1PVQ+ErGGzJFLLoRfIgTK+KT8XJkkq3nTdYiChpF0NhWIFaOqL3G+rqEdvNtTWHW2MNxF/36NGILR/WTw/fmEQ11W8/pSGBS+Lss2XTvHYh/YJ0b9+4BfM4YH38wByBxP8c+NyS+i/e1OrbGvzfogStn9X4C4nbc/nfYAAAAAElFTkSuQmCC';

    // Set image source to data URI
    const imgElement = document.getElementById('my-image');
    imgElement.src = imageData;
}

function renderDom(data, index) {
    if (data && data.length < index) {
        displayElement.textContent = data[index];
        setTimeout(() => {
            renderDom(data, index + 1)
        }, 2000)
    }
}

const _wait = (delay = 200) => new Promise(resolve => setTimeout(resolve, delay))

async function startTracking(data = []) {
    // const value = localStorage.getItem('trackingUserDetails')
    // const data = JSON.parse(value)
    // const data = require('./data.json')

    for (let i = 0; i < data.length; i++) {
        const elem = data[i]
        switch (elem.event) {
            case EVENT_TYPES.CLICK:
                const element = document.getElementById(elem.elemId)
                break
            case EVENT_TYPES.MOUSE:
                console.log("moving mouse", elem.pageX)
                cursor.style.left = (px + elem.x) + "px";
                cursor.style.top = (py + elem.y) + "px";

                // for trail
                mouse.x = elem.x;
                mouse.y = elem.y;

                await _wait(50)

                break
            case EVENT_TYPES.INPUT:
                const elementInput = document.getElementById(elem.elemId)
                setTimeout(() => elementInput.value = elem.value, 300)
                await _wait()
                break
            default:
                console.log("doing NOthinf", elem)

        }
    }
}







//  starting Trail
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};

Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    var x = mouse.x,
        y = mouse.y;

    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}




function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();

