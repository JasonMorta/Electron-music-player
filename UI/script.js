document.addEventListener('DOMContentLoaded', function () {
    const audioFileInput = document.getElementById('audioFile');
    const audioText = document.getElementById('audioText');
    const audioElement = document.getElementById('audioElement');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    const warningMessage = document.getElementById('warningMessage');

    const root = document.querySelector('#file-upload-button');
    console.log('root', root)

    console.log('Audio Player Loaded');
    console.log('Node-v',versions.node());

    // Pause audion when choosing a new file
    audioFileInput.addEventListener('click', function () {
        audioElement.pause(); 
    });


    audioFileInput.addEventListener('change', function (event) {
      // Pause any currently playing audio
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType === 'audio/mpeg' || fileType === 'audio/ogg' || fileType === 'audio/wav') {
                const objectURL = URL.createObjectURL(file);
                audioElement.src = objectURL;
                warningMessage.style.display = 'none';

                
                audioText.innerText = `${file.name}`;
                //path.join(os.homedir(), 'Downloads', file.name);
            } else {
                warningMessage.textContent = 'Warning: Unsupported file type. Please choose an MP3, OGG, or WAV file.';
                warningMessage.style.display = 'block';
                audioElement.src = '';
            }
        }
    });

    playButton.addEventListener('click', function () {
        audioElement.play();
    });

    pauseButton.addEventListener('click', function () {
        audioElement.pause();
    });

    stopButton.addEventListener('click', function () {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
});
