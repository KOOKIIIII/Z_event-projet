// script.js
document.addEventListener('DOMContentLoaded', function() {
    const videos = ["VIDEO_ID1", "VIDEO_ID2", "VIDEO_ID3"];
    let currentVideo = 0;

    const videoFrame = document.getElementById('videoFrame');
    const prevVideo = document.getElementById('prevVideo');
    const nextVideo = document.getElementById('nextVideo');

    prevVideo.addEventListener('click', function() {
        if (currentVideo > 0) {
            currentVideo--;
            updateVideo();
        }
    });

    nextVideo.addEventListener('click', function() {
        if (currentVideo < videos.length - 1) {
            currentVideo++;
            updateVideo();
        }
    });

    function updateVideo() {
        videoFrame.src = `https://www.youtube.com/embed/${videos[currentVideo]}?autoplay=1`;
    }
});


let slideIndex = 0;
