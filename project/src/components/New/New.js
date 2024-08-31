import React from 'react';
import './New.css';
import './New2.js';
// Import audio files
import song1 from './songs/song1.mp3';
import song2 from './songs/song2.mp3';
import song3 from './songs/song3.mp3';
import song4 from './songs/song4.mp3';
import song5 from './songs/song5.mp3';
import song6 from './songs/song6.mp3';

const albums = [
    { id: 1, src: '../../assets/photos/ad-1.png', song: song1, title: '' },
    { id: 2, src: '../../assets/photos/ad2.png', song: song2, title: 'Another Love' },
    { id: 3, src: '../../assets/photos/ad3.png', song: song3, title: 'Zorouf Me3andany' },
    { id: 4, src: '../../assets/photos/ad5.png', song: song4, title: 'Khalliny Zekra' },
    { id: 5, src: '../../assets/photos/ad4.png', song: song5, title: 'Never Let Go' },
    { id: 6, src: '../../assets/photos/ad6.png', song: song6, title: 'Dreamers' },
    { id: 7, src: '../../assets/photos/ad-1.png', song: song1, title: 'Set Fire to the Rain' },
    { id: 8, src: '../../assets/photos/ad2.png', song: song2, title: 'Another Love' },
    { id: 9, src: '../../assets/photos/ad3.png', song: song3, title: 'Zorouf Me3andany' },
    { id: 10, src: '../../assets/photos/ad-1.png', song: song4, title: 'Khalliny Zekra' },
];

function New() {
    return (
        <div className="container-6">
            <aside className="sidebar-6">
                <h1>ELITE</h1>
                <nav>
                    <ul>
                        <li><a href="#">Browse Music</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Popular</a></li>
                    </ul>
                </nav>
                <div className="library-6">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Favourite Tracks</a></li>
                        <li><a href="#">Recently Played</a></li>
                    </ul>
                </div>
                <div className="settings-6">
                    <a href="#">Settings</a>
                    <a href="#">Amal Nageh</a>
                </div>
            </aside>

            <main>
                <header>
                    <input type="search" placeholder="Search album" id="search-bar" />
                </header>
                <section className="new-6">
                    <h2>New Releases</h2>
                    <div className="album-grid-6">
                        {albums.map(album => (
                            <Album key={album.id} {...album} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

function Album({ src, song, title }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="album-6">
            <audio ref={audioRef} src={song}></audio>
            <div className="icon-6" onClick={togglePlay}>
                {isPlaying ? '❚❚' : '►'}
            </div>
            <img src={src} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default New;
