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

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const image = new Image();


window.onload = getTrackDataApi

async function getTrackDataApi() {
    fetch('/all-screenshots', {
        method: 'get'
    }).then((res) => res.json()).then((resp) => {
        console.log("response", resp.data)
        renderImage(resp.data, 0)

    })
}

function renderImage(data, index) {
    console.log("data=>>>>", data, data.length, index)

    if (data && data.length > index) {
        image.src = `/screenshot/${data[index]}`;
        console.log("`/screenshot/${data[index]}`", `/screenshot/${data[index]}`)
        image.onload = () => {
            const drawImageOnCanvas = () => {
                ctx.drawImage(image, 0, 0);
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        renderImage(data, index + 1);
                    }, 200);
                });
            };
            requestAnimationFrame(drawImageOnCanvas);
        };
        image.onerror = () => {
            console.log(`Failed to load image: /screenshot/${data[index]}`);
            setTimeout(() => {
                renderImage(data, index);
            }, 200);
        };
    }
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

