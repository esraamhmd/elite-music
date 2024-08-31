import React, { useState, useRef, useEffect } from 'react';
import MainContent from './MainContent'; // Import the new component
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Pop.css';

// Import audio files
import audio from './songs/audio.mp3';
import audio2 from './songs/audio2.mp3';
import audio3 from './songs/audio3.mp3';
import audio4 from './songs/audio4.mp3';
import audio5 from './songs/audio5.mp3';

const Pop = () => {
  const playlists = [
    { src: audio, title: "Song 1" },
    { src: audio2, title: "Song 2" },
    { src: audio3, title: "Song 3" },
    { src: audio4, title: "Song 4" },
    { src: audio5, title: "Song 5" },
  ];

  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [iconClass, setIconClass] = useState('bi bi-play-circle'); // Default icon
  const audioRefs = useRef(playlists.map(() => React.createRef()));
  const controlIconRef = useRef(null);

  const pauseAllExcept = (currentIndex) => {
    audioRefs.current.forEach((audioRef, index) => {
      if (index !== currentIndex && audioRef.current) {
        audioRef.current.pause();
      }
    });
  };

  const togglePlayPause = (index) => {
    const currentTrack = audioRefs.current[index].current;

    if (currentTrack.paused) {
      pauseAllExcept(index);
      currentTrack.play();
      setCurrentPlayingIndex(index);
      setIconClass('bi bi-pause-circle'); // Change to pause icon
    } else {
      currentTrack.pause();
      setCurrentPlayingIndex(null);
      setIconClass('bi bi-play-circle'); // Change back to play icon
    }
  };

  const handlePlayButtonClick = (index) => {
    togglePlayPause(index);
  };

  const handleSettingsClick = (event) => {
    event.stopPropagation();
    const settingsContainer = event.currentTarget;
    const settingsList = settingsContainer.querySelector('.setting-list');
    
    // Toggle the display of the settings list
    settingsList.style.display = settingsList.style.display === 'block' ? 'none' : 'block';
  };

  useEffect(() => {
    const handleTrackEnd = () => {
      setCurrentPlayingIndex(null);
      setIconClass('bi bi-play-circle'); // Change back to play icon when track ends
    };

    audioRefs.current.forEach((audioRef) => {
      if (audioRef.current) {
        audioRef.current.addEventListener('ended', handleTrackEnd);
      }
    });

    return () => {
      audioRefs.current.forEach((audioRef) => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleTrackEnd);
        }
      });
    };
  }, []);

  return (
    <MainContent
      playlists={playlists}
      currentPlayingIndex={currentPlayingIndex}
      iconClass={iconClass}
      audioRefs={audioRefs}
      controlIconRef={controlIconRef}
      handlePlayButtonClick={handlePlayButtonClick}
      handleSettingsClick={handleSettingsClick}
    />
  );
};

export default Pop;
