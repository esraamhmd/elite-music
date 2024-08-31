import React, { useRef, useState } from 'react';

// AudioPlayer Component
export const AudioPlayer = ({ audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            <button onClick={toggleAudio} className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
            <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
        </div>
    );
};

// App Component
export const App = () => {
    return (
        <div>
            <AudioPlayer audioSrc="audio/src/Songs/audio.mp3" />
            <AudioPlayer audioSrc="audio/src/Songs/audio2.mp3" />
            <AudioPlayer audioSrc="audio/src/Songs/audio3.mp3" />
            <AudioPlayer audioSrc="audio/src/Songs/audio4.mp3" />
            <AudioPlayer audioSrc="audio/src/Songs/audio5.mp3" />
        </div>
    );
};
