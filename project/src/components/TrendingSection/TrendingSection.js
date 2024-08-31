import React from 'react';
import { useNavigate, Route } from 'react-router-dom';
import './TrendingSection.css';
import shapeImg from '../../assets/img/shape.jfif'; 
import midNightImg from '../../assets/img/mid_night.jfif'; 
import kindOfBlueImg from '../../assets/img/kind_ofblue.jfif'; 
import songImg from '../../assets/img/song.jfif'; 
import sickImg from '../../assets/img/sick.jfif'; 
import wannaImg from '../../assets/img/wanna.jfif'; 
import dreamerImg from '../../assets/img/dreamer.jfif'; 
import clamImg from '../../assets/img/clam.jfif'; 

const TrendingSection = () => {
  const navigate = useNavigate();

const handleSeeMoreClick = () => {
  navigate('/trending');
};

  return (
    <section id="trending-section" className="trending">
      <h2>Trending</h2>
      <button className="see-more" onClick={handleSeeMoreClick}>
        See More <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className="songs">
        <div className="song">
          <img src={shapeImg} alt="Shape of You" />
          <p><b>Shape of You</b><br />Ed Sheeran</p>
        </div>
        <div className="song">
          <img src={midNightImg} alt="Midnights" />
          <p><b>Midnights</b><br />Taylor Swift</p>
        </div>
        <div className="song">
          <img src={kindOfBlueImg} alt="Kind Of Blue" />
          <p><b>Kind Of Blue</b><br />Miles Davis</p>
        </div>
        <div className="song">
          <img src={songImg} alt="Guitar Songs" />
          <p><b>Guitar Songs</b><br />Billie Eilish</p>
        </div>
        <div className="song">
          <img src={sickImg} alt="Sick Boy" />
          <p><b>Sick Boy</b><br />Chainsmokers</p>
        </div>
        <div className="song">
          <img src={wannaImg} alt="I Wanna Be Yours" />
          <p><b>I Wanna Be Yours</b><br />Arctic Monkeys</p>
        </div>
        <div className="song">
          <img src={dreamerImg} alt="Dreamers" />
          <p><b>Dreamers</b><br />Jungkook</p>
        </div>
        <div className="song">
          <img src={clamImg} alt="Calm Down" />
          <p><b>Calm Down</b><br />Selena Gomez</p>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
