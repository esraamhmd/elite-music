import React from 'react';
import { Link } from 'react-router-dom';
import './Pop.css'; // Ensure this path is correct

const MainContent = ({
  playlists,
  currentPlayingIndex,
  iconClass,
  audioRefs,
  controlIconRef,
  handlePlayButtonClick,
  handleSettingsClick
}) => {
  return (
    <div className="Pop">
      <div className="menuSide">
        <div className="theFirst">
          <h1>ELITE</h1>
        </div>
        <div className="firstside">
          <h2>Browse Music</h2>
          <ul>
            <li>
              <a href="https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D">
                <i className="bi bi-bar-chart"></i> Trending
              </a>
            </li>
            <li>
              <a href="https://soundcamps.com/blog/best-music-smart-links/">
                <i className="bi bi-moon"></i> Popular
              </a>
            </li>
          </ul>
        </div>
        <div className="library1">
          <h2>Library</h2>
          <ul>
            <li>
              <a href="">
                <i className="bi bi-house-door-fill"></i> HOME
              </a>
            </li>
            <li>
              <a href="#favourite">
                <i className="bi bi-heart"></i> Favourite Tracks
              </a>
            </li>
            <li>
              <a href="#played">
                <i className="bi bi-clock"></i> Recently Played
              </a>
            </li>
          </ul>
        </div>
        <div className="setting">
          <div className="settings-container" onClick={handleSettingsClick}>
            <a href="#setting" id="settingLink">
              <i className="bi bi-gear"></i> Setting
            </a>
            <ul className="setting-list">
              <li><a href="#option1">Help</a></li>
              <li><a href="#option2">Change</a></li>
            </ul>
          </div>
        </div>
        <div className="person">
          <img src="../../assets/image/pimg.png" alt="person" width="40" height="40" />
          <p>Farah Hany</p>
        </div>
      </div>
      <div className="main1">
        <header>
          <div className="search1">
            <div className="search-box1">
              <input type="text" placeholder="press / to search" />
              <i className="bi bi-search"></i>
            </div>
            <i className="bi bi-gear"></i>
            <a href="log.html" target="_blank" rel="noopener noreferrer">
              <button>Log In</button>
            </a>
          </div>
        </header>
        <nav className="nav">
          <img src="../../assets/image/download (1).jpg" alt="EMINEM CURTAIN CALL" />
          <div className="topLeft1">EMINEM CURTAIN CALL</div>
          <div className="topLeft2">ALBUM</div>
          <div className="play">
            <i id="controlIcon" ref={controlIconRef} className={iconClass}></i> | Play
          </div>
          <div className="boxes">
            <div className="box1"></div>
            {playlists.map((playlist, index) => {
              if (!playlist || !playlist.src) {
                console.error(`Playlist item at index ${index} is invalid`);
                return null;
              }

              return (
                <div key={index} className={`box box${index + 2}`}>
                  <div className="player">
                    <img
                      className={`playButton ${currentPlayingIndex === index ? 'clicked' : ''}`}
                      src="../../assets/image/tylor.jpg" // Update this if you have unique images for each track
                      alt="Play"
                      onClick={() => handlePlayButtonClick(index)}
                      data-index={index}
                    />
                  </div>
                  <div id={`playlist${index + 1}`}>
                    <audio
                      className="audio"
                      ref={audioRefs.current[index]}
                      src={playlist.src}
                      data-index={index}
                      data-title={playlist.title}
                    ></audio>
                  </div>
                  <div className="left">
                    <h3>{playlist.title}</h3>
                    <h6>EMINEM</h6> {/* Update if you have different artists */}
                  </div>
                  <div className="right">
                    <i className="bi bi-clock"></i>
                    <p className="time">2:30</p>
                    <p className="s">MAY 2005</p>
                    <div className="settings-container" onClick={handleSettingsClick}>
                      <i className="bi bi-three-dots settings-icon"></i>
                      <ul className="setting-list">
                        <li><a href="#settings">Settings</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainContent;
