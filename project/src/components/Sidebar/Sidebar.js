import React from 'react';
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="inside">
        <h1>ELITE</h1>
      </div>
      <nav>
        <h2>Browse Music</h2>
        <ul>
          <li><a href="#trending-section"><i className="fa-solid fa-chart-line"></i> Trending</a></li>
          <li><a href="#popular-section"><i className="fa-solid fa-star"></i> Popular</a></li>
        </ul>
      </nav>
      <div className="library">
        <h2>Library</h2>
        <ul>
          <li><a href="#"><i className="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#artists-section"><i className="fa-solid fa-heart"></i> Artists</a></li>
          <li><a href="#newreleases-section"><i className="fa-solid fa-clock"></i> New Releases</a></li>
        </ul>
      </div>
      <div className="settings">
        <a href="#"><i className="fa-solid fa-gear"></i> Settings</a>
      </div>
      <div className="user">
        <img src="../assets/img/user1.jfif" alt="User" />
        <p>Esraa</p>
      </div>
    </div>
  );
}

export default Sidebar;
