import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Main/Header';
import TitleSection from '../Main/TitleSection';
import TrendingSection from '../TrendingSection/TrendingSection';
import PopularSection from '../PopularSection/PopularSection';
import NewReleasesSection from '../NewReleasesSection/NewReleasesSection';
import ArtistsSection from '../ArtistsSection/ArtistsSection';
import NewSongsSection from '../NewSongsSection/NewSongsSection';
import Trend from '../TrendMarina/Trend';
import Footer from '../Footer/Footer';
import './Home.css';
import Signup from '../Main/Signup';
import Login from '../Main/Login';
function Home() {
  return (
    <div className="App">
     
      <Sidebar />
      <main className="main">
        <div className="header">
          <Header />
        </div>
        <div className="title-section">
          <TitleSection />
        </div>
        <div className="trending-section">
          <TrendingSection />
        </div>
        <div className="popular-section">
          <PopularSection />
        </div>
        <div className="new-releases-section">
          <NewReleasesSection />
        </div>
        <div className="artists-section">
          <ArtistsSection />
        </div>
        <div className="new-songs-section">
          <NewSongsSection />
        </div>
        {/* <div className="trend-section">
          <Trend />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
