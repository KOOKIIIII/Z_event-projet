function filterStreamer(day) {
    const streamers = document.querySelectorAll('.streamer');

    streamers.forEach(streamer=> {
        const streamerDays = streamer.getAttribute('data-days');
        if (streamerDays.includes(day)) {
            streamer.style.display = 'block';
        } else {
            streamer.style.display = 'none';
        }
    });
}

