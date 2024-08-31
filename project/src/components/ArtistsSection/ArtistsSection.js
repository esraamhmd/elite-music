// src/components/ArtistsSection/ArtistsSection.js
import React from 'react';
import './ArtistsSection.css';
import { useNavigate, Route } from 'react-router-dom';
// Import images
import art1Image from '../../assets/img/art1.jfif';
import waImage from '../../assets/img/wa.jfif';
import art3Image from '../../assets/img/art3.jfif';
import art4Image from '../../assets/img/art4.jfif';
import art5Image from '../../assets/img/art5.jfif';
import art6Image from '../../assets/img/art6.jfif';
import art2Image from '../../assets/img/art2.jfif';
import art7Image from '../../assets/img/art7.jfif';

const ArtistsSection = () => {
  const navigate = useNavigate();

const handleSeeMoreClick = () => {
  navigate('/art');
};

  return (
    <section id="artists-section" className="trending">
      <h2>Artists</h2>
      <button className="see-more" onClick={handleSeeMoreClick}>
        See More <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className="songs">
        <div className="song">
          <img src={art1Image} alt="Ed Sheeran" className="artist-img" />
          <p><b>Ed Sheeran</b></p>
        </div>
        <div className="song">
          <img src={waImage} alt="Wael Jassar" className="artist-img" />
          <p><b>Wael Jassar</b></p>
        </div>
        <div className="song">
          <img src={art3Image} alt="BTS" className="artist-img" />
          <p><b>BTS</b></p>
        </div>
        <div className="song">
          <img src={art4Image} alt="Asalaa" className="artist-img" />
          <p><b>Asalaa</b></p>
        </div>
        <div className="song">
          <img src={art5Image} alt="Abeer Nehme" className="artist-img" />
          <p><b>Abeer Nehme</b></p>
        </div>
        <div className="song">
          <img src={art6Image} alt="Elissa" className="artist-img" />
          <p><b>Elissa</b></p>
        </div>
        <div className="song">
          <img src={art2Image} alt="Taylor Swift" className="artist-img" />
          <p><b>Taylor Swift</b></p>
        </div>
        <div className="song">
          <img src={art7Image} alt="Maroon 5" className="artist-img" />
          <p><b>Maroon 5</b></p>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
