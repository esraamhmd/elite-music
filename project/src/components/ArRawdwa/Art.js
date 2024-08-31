import React from "react";
import "boxicons/css/boxicons.min.css";
import "./Art2.js";
import "./Ar.css";
import audio from "./Songs/audio.mp3";
import audio2 from "./Songs/audio2.mp3";
import audio3 from "./Songs/audio3.mp3";
import audio4 from "./Songs/audio4.mp3";
import audio5 from "./Songs/audio5.mp3";
import { AudioPlayer } from "./Art2.js";
function Art() {
  return (
    <div className="container2" id="container">
      <aside className="sidebar2" id="column1">
        <div className="title2">
          <h1>ELITE</h1>
        </div>

        <div className="menu2">
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

        <div className="menu2">
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

        <div className=" menu2">
          <h5 style={{ color: "#18181d", marginTop: "-180px" }}>Settings</h5>
          <ul>
            <li>
              <i className="bx bx-cog" style={{ marginTop: "-100px" }}></i>
              <a href="/" style={{ fontSize: "17px", marginTop: "-100px" }}>
                Settings
              </a>
            </li>
            <li>
              <div className="user2">
                <img
                  src="https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94="
                  alt="User"
                />
                <h5>radwa</h5>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main id="column2">
        <header>
          <div className="header-right-2" id="row1-1">
            <div className="search2">
              <input
                type="text"
                placeholder="press/to search"
                style={{ width: "170px" }}
              />
              <i className="bx bx-search-alt"></i>
            </div>
            <i className="bx bx-cog settings-icon"></i>
            <button className="login-btn">Log_In</button>
          </div>
        </header>

        <div className="trending2" id="row1-2">
          <div className="left">
            <h2>artists</h2>
            <div className="inPut">
              <input type="text" placeholder="search album" />
              <i className="bx bx-search-alt"></i>
            </div>
          </div>

          <div className="playlists-2">
            <div className="list2">
              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio">
                    <source src={audio} type="audio/mpeg" />
                  </audio>

                </div>
                <h4>due lipa </h4>
              </div>
              <div className="item2">
                <img
                  src="https://2.bp.blogspot.com/-6yxZ9vC7EcE/WGpjU40JQNI/AAAAAAAAi7w/Ldc6TanLGDkoftgYQGzFNAN8-nFG5X_wQCLcB/s1600/Black-Pictures+%2829%29.jpg"
                  alt=""
                />
                <div className="play2">

                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio2", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio2">

                    <source src={audio2} type="audio/mpeg" />
                  </audio>

                </div>
                <h4>taylor Swift</h4>
              </div>

              <div className="item2">
                <img
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/20/09/billie-eilish.jpg"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio3", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio3">
                    <source src={audio3} type="audio/mpeg" />
                  </audio>

                </div>
                <h4>Bille Eilish</h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.WHXAjZBPVZiggqxAGjYJ7QHaE5&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio4", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio4">
                    <source src={audio4} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>avicii</h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio5", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio5">
                    <source src={audio5} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>due lipa </h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio6", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio6">
                    <source src={audio} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>due lipa </h4>
              </div>
              <div className="item2">
                <img
                  src="https://2.bp.blogspot.com/-6yxZ9vC7EcE/WGpjU40JQNI/AAAAAAAAi7w/Ldc6TanLGDkoftgYQGzFNAN8-nFG5X_wQCLcB/s1600/Black-Pictures+%2829%29.jpg"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio7", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio7">
                    <source src={audio2} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>taylor Swift</h4>
              </div>
              <div className="item2">
                <img
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/20/09/billie-eilish.jpg"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio2", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio8">
                    <source src={audio3} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>Bille Eilish</h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.WHXAjZBPVZiggqxAGjYJ7QHaE5&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio3", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio9">
                    <source src={audio4} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>avicii</h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt=""
                />

                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio4", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio10">
                    <source src={audio5} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>due lipa </h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio5", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio11">
                    <source src={audio} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>due lipa </h4>
              </div>

              <div className="item2">
                <img
                  src="https://2.bp.blogspot.com/-6yxZ9vC7EcE/WGpjU40JQNI/AAAAAAAAi7w/Ldc6TanLGDkoftgYQGzFNAN8-nFG5X_wQCLcB/s1600/Black-Pictures+%2829%29.jpg"
                  alt=""
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio6", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio12">
                    <source src={audio2} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>taylor Swift</h4>
              </div>

              <div className="item2">
                <img
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/20/09/billie-eilish.jpg"
                  alt="billi"
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio13">
                    <source src={audio3} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>Bille Eilish</h4>
              </div>
              <div className="item2">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.WHXAjZBPVZiggqxAGjYJ7QHaE5&pid=Api&P=0&h=220"
                  alt="avicii"
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio2", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio14">
                    <source src={audio4} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>avicii</h4>
              </div>

              <div className="item2">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.So7juN5K6AbTbgx30ClSlAHaEs&pid=Api&P=0&h=220"
                  alt="due"
                />
                <div className="play2">
                  <i
                    className="bx bx-play play-button"
                    onClick={(e) => AudioPlayer("audio3", e.currentTarget)}
                  ></i>
                  <audio controls></audio>
                  <audio id="audio15">
                    <source src={audio5} type="audio/mpeg" />
                  </audio>
                </div>
                <h4>due lipa </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Art;