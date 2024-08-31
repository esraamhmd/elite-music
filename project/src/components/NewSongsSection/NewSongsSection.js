
import React from 'react';
import './NewSongsSection.css';


import shapeImage from '../../assets/img/shape.jfif';
import clamImage from '../../assets/img/clam.jfif';
import lamonImage from '../../assets/img/lamon.jfif';
import oceanImage from '../../assets/img/ocean.jfif';
import yaImage from '../../assets/img/ya.jfif';
import midNightImage from '../../assets/img/mid_night.jfif';

const NewSongsSection = () => {
    return (
        <section id="new-songs-section">
            <h2>New Songs</h2>
            <div className="new-songs-container">
                <div className="new-song">
                    <div className="song-img">
                        <img src={shapeImage} alt="Shape of You" />
                    </div>
                    <div className="song-info">
                        <h3>Shape of You</h3>
                        <p>Ed Sheeran</p>
                    </div>
                </div>
                <div className="new-song">
                    <div className="song-img">
                        <img src={clamImage} alt="Calm Down" />
                    </div>
                    <div className="song-info">
                        <h3>Calm Down</h3>
                        <p>Selena Gomez</p>
                    </div>
                </div>
                <div className="new-song">
                    <div className="song-img">
                        <img src={lamonImage} alt="Lamoon Ne3na3" />
                    </div>
                    <div className="song-info">
                        <h3>Lamoon Ne3na3</h3>
                        <p>Hamaki</p>
                    </div>
                </div>
                <div className="new-song">
                    <div className="song-img">
                        <img src={oceanImage} alt="Ocean Eyes" />
                    </div>
                    <div className="song-info">
                        <h3>Ocean Eyes</h3>
                        <p>Billie Eilish</p>
                    </div>
                </div>
                <div className="new-song">
                    <div className="song-img">
                        <img src={yaImage} alt="Ya Layaly" />
                    </div>
                    <div className="song-info">
                        <h3>Ya Layaly</h3>
                        <p>Ahmed Saad</p>
                    </div>
                </div>
                <div className="new-song">
                    <div className="song-img">
                        <img src={midNightImage} alt="Midnights" />
                    </div>
                    <div className="song-info">
                        <h3>Midnights</h3>
                        <p>Taylor Swift</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewSongsSection;
