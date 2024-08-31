import React from 'react';

const Player = ({ index, imageSrc, onPlayPause, isPlaying }) => {
  return (
    <div className="player">
      <img
        className={`playButton ${isPlaying ? 'clicked' : ''}`}
        data-index={index}
        src={imageSrc}
        alt="Play"
        onClick={() => onPlayPause(index)}
      />
    </div>
  );
};

export default Player;
