
import React from 'react';
import './NewReleasesSection.css';
import { useNavigate, Route } from 'react-router-dom';

import waImage from '../../assets/img/wa.jfif';
import dnaImage from '../../assets/img/dna.jfif';
import yaImage from '../../assets/img/ya.jfif';
import lamonImage from '../../assets/img/lamon.jfif';
import oceanImage from '../../assets/img/ocean.jfif';
import clamImage from '../../assets/img/clam.jfif';
import shapeImage from '../../assets/img/shape.jfif';
import momImage from '../../assets/img/mom.jfif';

const NewReleasesSection = () => {
  const navigate = useNavigate();

const handleSeeMoreClick = () => {
  navigate('/new');
};
  return (
    <section id="newreleases-section" className="trending">
      <h2>New Releases</h2>
      <button className="see-more" onClick={handleSeeMoreClick}>
        See More <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className="songs">
        <div className="song">
          <img src={waImage} alt="Koul Waad" />
          <p><b>Koul Waad</b><br />Wael Jassar</p>
        </div>
        <div className="song">
          <img src={dnaImage} alt="DNA" />
          <p><b>DNA</b><br />BTS</p>
        </div>
        <div className="song">
          <img src={yaImage} alt="Ya Layaly" />
          <p><b>Ya Layaly</b><br />Ahmed Saad</p>
        </div>
        <div className="song">
          <img src={lamonImage} alt="Lamoon Ne3na3" />
          <p><b>Lamoon Ne3na3</b><br />Hamaki</p>
        </div>
        <div className="song">
          <img src={oceanImage} alt="Ocean Eyes" />
          <p><b>Ocean Eyes</b><br />Billie Eilish</p>
        </div>
        <div className="song">
          <img src={clamImage} alt="Calm Down" />
          <p><b>Calm Down</b><br />Selena Gomez</p>
        </div>
        <div className="song">
          <img src={shapeImage} alt="Shape of You" />
          <p><b>Shape of You</b><br />Ed Sheeran</p>
        </div>
        <div className="song">
          <img src={momImage} alt="Memories" />
          <p><b>Memories</b><br />Maroon 5</p>
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSection;
