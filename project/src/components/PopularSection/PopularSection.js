import React from 'react';
import { useNavigate, Route } from 'react-router-dom';
import './PopularSection.css'; 
import unstoppableImage from '../../assets/img/unstop.jfif';
import memoriesImage from '../../assets/img/mom.jfif';
import wayBackHomeImage from '../../assets/img/way.jfif';
import biSarahaImage from '../../assets/img/be.jfif';
import sabbFarhetyImage from '../../assets/img/aslaa.jfif';
import minAwelDekikaImage from '../../assets/img/min.jfif';
import beAmaretMeenImage from '../../assets/img/faridd.jfif';
import midnightsImage from '../../assets/img/mid_night.jfif';

const PopularSection = () => {
  const navigate = useNavigate();

const handleSeeMoreClick = () => {
  navigate('/pop');
};

  return (
    <section id="popular-section" className="trending">
      <h2>Popular</h2>
      <button className="see-more" onClick={handleSeeMoreClick}>
        See More <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className="songs">
        <div className="song">
          <img src={unstoppableImage} alt="Unstoppable" />
          <p><b>Unstoppable</b><br />Sia</p>
        </div>
        <div className="song">
          <img src={memoriesImage} alt="Memories" />
          <p><b>Memories</b><br />Maroon 5</p>
        </div>
        <div className="song">
          <img src={wayBackHomeImage} alt="Way Back Home" />
          <p><b>Way Back Home</b><br />SHAUN feat. Conor Maynard</p>
        </div>
        <div className="song">
          <img src={biSarahaImage} alt="Bi Saraha" />
          <p><b>Bi Saraha</b><br />Abeer Nehme</p>
        </div>
        <div className="song">
          <img src={sabbFarhetyImage} alt="Sabb Farhety" />
          <p><b>Sabb Farhety</b><br />Assala & Ahmed Saad</p>
        </div>
        <div className="song">
          <img src={minAwelDekikaImage} alt="Min Awel Dekika" />
          <p><b>Min Awel Dekika</b><br />Elissa & Saad Lamjarred</p>
        </div>
        <div className="song">
          <img src={beAmaretMeenImage} alt="Be Amaret Meen" />
          <p><b>Be Amaret Meen</b><br />Farid</p>
        </div>
        <div className="song">
          <img src={midnightsImage} alt="Midnights" />
          <p><b>Midnights</b><br />Taylor Swift</p>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
