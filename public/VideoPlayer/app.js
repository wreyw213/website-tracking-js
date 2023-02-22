const options = ['Option 1', 'Option 2', 'Option 3'];

const select = document.getElementById('select');


select.addEventListener('change', (event) => {
    const videoPlayer = document.getElementById('videoPlayer');

    const selectedValue = event.target.value;
    console.log(selectedValue);
    const sourceElement = videoPlayer.querySelector('source');
    const newSourceUrl = `/video/${selectedValue}`;

    sourceElement.setAttribute('src', newSourceUrl);
    videoPlayer.load();

});

window.onload = init

function init() {
    fetch("/allVideos", { method: 'GET' }).then((res) => res.json()).then((response) => {
        const { data } = response;

        data.forEach((option) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
        appendVideo(`/video/${data[0]}`)

    }).catch((err) => {
        console.log("error=>>", err);
    })
}

function appendVideo(source) {

    const videoDiv = document.getElementById('videoPlayerDiv');
    const videoPlayer = document.createElement('video');
    videoPlayer.setAttribute('width', '600px');
    videoPlayer.setAttribute('id', 'videoPlayer');
    videoPlayer.setAttribute('muted', 'muted');
    videoPlayer.setAttribute('controls', 'controls');
    videoPlayer.setAttribute('autoplay', 'autoplay');
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', source);
    sourceElement.setAttribute('type', 'video/mp4');
    videoPlayer.appendChild(sourceElement);
    videoDiv.appendChild(videoPlayer);
}