import React from 'react';

const ControlIcon = ({ isPlaying, onClick }) => {
  return (
    <i
      id="controlIcon"
      className={`controlIcon bi ${isPlaying ? 'bi-pause-circle' : 'bi-play-circle'}`}
      onClick={onClick}
    />
  );
};

export default ControlIcon;