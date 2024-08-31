import React, { useState } from 'react';

const New2 = () => {
    const audioFiles = [
        { id: 'audio1', src: 'songs/song1.mp3', title: 'Song 1' },
        { id: 'audio2', src: 'songs/song2.mp3', title: 'Song 2' },
        { id: 'audio3', src: 'songs/song3.mp3', title: 'Song 3' },
        { id: 'audio4', src: 'songs/song4.mp3', title: 'Song 4' },
        { id: 'audio5', src: 'songs/song5.mp3', title: 'Song 5' },
        { id: 'audio6', src: 'songs/song6.mp3', title: 'Song 6' },
        { id: 'audio7', src: 'songs/song7.mp3', title: 'Song 7' },
        { id: 'audio8', src: 'songs/song8.mp3', title: 'Song 8' },
        { id: 'audio9', src: 'songs/song9.mp3', title: 'Song 9' },
        { id: 'audio10', src: 'songs/song10.mp3', title: 'Song 10' },
        { id: 'audio11', src: 'songs/song11.mp3', title: 'Song 11' },
        { id: 'audio12', src: 'songs/song12.mp3', title: 'Song 12' },
    ];

    const [playing, setPlaying] = useState(null);

    const togglePlayPause = (audioId) => {
        const audioElement = document.getElementById(audioId);

        if (playing && playing !== audioId) {
            document.getElementById(playing).pause();
            document.getElementById(`playPauseIcon${playing}`).textContent = '►';
        }

        if (audioElement.paused) {
            audioElement.play();
            setPlaying(audioId);
            document.getElementById(`playPauseIcon${audioId}`).textContent = '❚❚';
        } else {
            audioElement.pause();
            setPlaying(null);
            document.getElementById(`playPauseIcon${audioId}`).textContent = '►';
        }
    };

    return (
        <div className="album-grid-6">
            {audioFiles.map((file, index) => (
                <div key={file.id} className="album-6">
                    <audio id={file.id}>
                        <source src={file.src} type="audio/mpeg" />
                    </audio>
                    <div
                        id={`playPauseIcon${file.id}`}
                        className="icon-6 paused-6"
                        onClick={() => togglePlayPause(file.id)}
                    >
                        ►
                    </div>
                    <img src={`./photos/ad${index + 1}.png`} alt={file.title} />
                    <p>{file.title}</p>
                </div>
            ))}
        </div>
    );
};

export default New2;
