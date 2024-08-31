import React from "react";
import 'boxicons/css/boxicons.min.css';
import './Play.js';
import './Trend.css';
import audio from './songs/audio.mp3';
import audio2 from './songs/audio2.mp3';
import audio3 from './songs/audio3.mp3';
import audio4 from './songs/audio4.mp3';
import audio5 from './songs/audio5.mp3';
import audio6 from './songs/audio6.mp3';
import { toggleAudio } from './Play.js'; 

function Trend() {
  
  return (
    <div className="trend-container" >
      <aside className="trend-sidebar" >
        <div className="trend-title">
          <h1 >ELITE</h1>
        </div>

        <div className="trend-menu">
          <h5 style={{ marginTop: "-160px" }}>Browse_Music</h5>
          <ul>
            <li>
              <i className="bx bx-trending-up"></i>
              <a href="/trending">Trending</a>
            </li>
            <li>
              <i className="bx bxs-star"></i>
              <a href="/popular">Popular</a>
            </li>
          </ul>
        </div>

        <div className="trend-menu">
          <h5 style={{ marginTop: "-220px" }}>Library</h5>
          <ul>
            <li>
              <i className="bx bx-home"></i>
              <a href="/home">Home</a>
            </li>
            <li>
              <i className="bx bxs-heart"></i>
              <a href="/favourite_tracks">FavouriteTracks</a>
            </li>
            <li>
              <i className="bx bx-time-five"></i>
              <a href="/recently_played">Recently Played</a>
            </li>
          </ul>
        </div>

        <div className="trend-menu">
          <h5 style={{ color: "#18181d", marginTop: "-180px" }}>Settings</h5>
          <ul>
            <li>
              <i className="bx bx-cog" style={{ marginTop: "-100px" }}></i>
              <a href="/settings" style={{ fontSize: "17px", marginTop: "-100px" }}>
                Settings
              </a>
            </li>
            <li>
              <div className="trend-user">
                <img
                  src="https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94="
                  alt="User"
                />
                <h5>Marina</h5>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main >
        <header>
          <div className="trend-header-right" >
            <div className="trend-search">
              <input type="text" placeholder="press/to search" style={{ width: "170px" }} />
              <i className="bx bx-search-alt"></i>
            </div>
            <i className="bx bx-cog settingss-icon"></i>
            <button className="loginn-btn">log_in</button>
          </div>
        </header>

        <div className="trend-trending" >
          <div className="left">
            <h2>Trending</h2>
            <div className="trend-search">
              <input type="text" placeholder="search album"  />
              <i className="bx bx-search-alt"></i>
            </div>
          </div>

          <div className="playlists">
            <div className="list3">
            <div className="item3"> 
              <img src="https://www.earasers.net/cdn/shop/collections/830dc3aaa7141d2b890e36396e6d9b7e.png?v=1685471990&width=1080" alt="singles" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio', e.currentTarget)}
                ></i>
                <audio id="audio">
                  <source src={audio} type="audio/mpeg" />
                </audio>
              </div>
              <h4>The Singles</h4>
              <p>Avicii</p>
            </div>
            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="midnights" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio2', e.currentTarget)}
                ></i>
                <audio id="audio2">
                  <source src={audio2} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Midnights</h4>
              <p>Taylor Swift</p>
            </div>

            <div className="item3">
              <img src="https://a1.cdn.hhv.de/items/images/generated/186x186/01059/1059293/1-john-coltrane-plays-the-blues.webp" alt="kind of blue" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio3', e.currentTarget)}
                ></i>
                <audio id="audio3">
                  <source src={audio3} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Kind Of Blue</h4>
              <p>Miles Davis</p>
            </div>

            <div className="item3">
              <img src="https://i.ytimg.com/vi/i_i-FF9MwxQ/default.jpg" alt="guitar" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio4', e.currentTarget)}
                ></i>
                <audio id="audio4">
                  <source src={audio4}type="audio/mpeg" />
                </audio>
              </div>
              <h4>Guitar Songs</h4>
              <p>Billie Eilish</p>
            </div>


            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="believer" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio6', e.currentTarget)}
                ></i>
                <audio id="audio6">
                  <source src={audio6} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Believer</h4>
              <p>Imagine Dragons</p>
            </div>
            
                <div className="item3">
              <img src="https://www.earasers.net/cdn/shop/collections/830dc3aaa7141d2b890e36396e6d9b7e.png?v=1685471990&width=1080" alt="singles" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio', e.currentTarget)}
                ></i>
                <audio id="audio">
                  <source src={audio} type="audio/mpeg" />
                </audio>
              </div>
              <h4>The Singles</h4>
              <p>Avicii</p>
            </div>
            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="midnights" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio2', e.currentTarget)}
                ></i>
                <audio id="audio2">
                  <source src={audio2} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Midnights</h4>
              <p>Taylor Swift</p>
            </div>

            <div className="item3">
              <img src="https://a1.cdn.hhv.de/items/images/generated/186x186/01059/1059293/1-john-coltrane-plays-the-blues.webp" alt="kind of blue" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio3', e.currentTarget)}
                ></i>
                <audio id="audio3">
                  <source src={audio3} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Kind Of Blue</h4>
              <p>Miles Davis</p>
            </div>

            <div className="item3">
              <img src="https://i.ytimg.com/vi/i_i-FF9MwxQ/default.jpg" alt="guitar" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio4', e.currentTarget)}
                ></i>
                <audio id="audio4">
                  <source src={audio4} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Guitar Songs</h4>
              <p>Billie Eilish</p>
            </div>

            <div className="item3">
              <img src="https://i.ytimg.com/vi/ncbgJdNxlcg/maxresdefault.jpg" alt="sick boy" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio5', e.currentTarget)}
                ></i>
                <audio id="audio5">
                  <source src={audio5} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Sick Boy</h4>
              <p>The Chainsmokers</p>
            </div>

            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="believer" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio6', e.currentTarget)}
                ></i>
                <audio id="audio6">
                  <source src={audio6} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Believer</h4>
              <p>Imagine Dragons</p>
            </div>
            
                <div className="item3">
              <img src="https://www.earasers.net/cdn/shop/collections/830dc3aaa7141d2b890e36396e6d9b7e.png?v=1685471990&width=1080" alt="singles" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio', e.currentTarget)}
                ></i>
                <audio id="audio">
                  <source src={audio} type="audio/mpeg" />
                </audio>
              </div>
              <h4>The Singles</h4>
              <p>Avicii</p>
            </div>
            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="midnights" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio2', e.currentTarget)}
                ></i>
                <audio id="audio2">
                  <source src={audio2} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Midnights</h4>
              <p>Taylor Swift</p>
            </div>

            <div className="item3">
              <img src="https://a1.cdn.hhv.de/items/images/generated/186x186/01059/1059293/1-john-coltrane-plays-the-blues.webp" alt="kind of blue" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio3', e.currentTarget)}
                ></i>
                <audio id="audio3">
                  <source src={audio3} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Kind Of Blue</h4>
              <p>Miles Davis</p>
            </div>

            <div className="item3">
              <img src="https://i.ytimg.com/vi/i_i-FF9MwxQ/default.jpg" alt="guitar" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio4', e.currentTarget)}
                ></i>
                <audio id="audio4">
                  <source src={audio4} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Guitar Songs</h4>
              <p>Billie Eilish</p>
            </div>

            

            <div className="item3">
              <img src="https://i.pinimg.com/originals/d7/7f/20/d77f208099fb95a9e988f821b7a987f8.jpg" alt="believer" />
              <div className="play3">
                <i
                  className="bx bx-play play-button"
                  onClick={(e) => toggleAudio('audio6', e.currentTarget)}
                ></i>
                <audio id="audio6">
                  <source src={audio6} type="audio/mpeg" />
                </audio>
              </div>
              <h4>Believer</h4>
              <p>Imagine Dragons</p>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trend;