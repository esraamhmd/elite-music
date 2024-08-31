import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; 


const Header = () => {
    const searchInputRef = useRef(null);
    const searchIconRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '/') {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        const filterSongs = () => {
            const searchTerm = searchInputRef.current.value.toLowerCase();
            const sections = document.querySelectorAll('.trending .songs');
            sections.forEach(section => {
                const songs = section.querySelectorAll('.song');
                songs.forEach(function(song) {
                    const songTitle = song.querySelector('p b') ? song.querySelector('p b').textContent.toLowerCase() : '';
                    const artistName = song.querySelector('p') ? song.querySelector('p').textContent.toLowerCase() : '';
                    
                    if (songTitle.includes(searchTerm) || artistName.includes(searchTerm)) {
                        song.style.display = 'block';
                    } else {
                        song.style.display = 'none';
                    }
                });
            });
        };

        document.addEventListener('keypress', handleKeyPress);

        if (searchInputRef.current) {
            searchInputRef.current.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    filterSongs();
                }
            });
        }

        if (searchIconRef.current) {
            searchIconRef.current.addEventListener('click', filterSongs);
        }

        return () => {
            document.removeEventListener('keypress', handleKeyPress);

            if (searchInputRef.current) {
                searchInputRef.current.removeEventListener('keypress', filterSongs);
            }

            if (searchIconRef.current) {
                searchIconRef.current.removeEventListener('click', filterSongs);
            }
        };
    }, []);

    const handleSeeMoreClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="main">
            <header>
                <div className="search">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder=" search"
                            ref={searchInputRef}
                        />
                        <i className="fa-solid fa-search search-icon" ref={searchIconRef}></i>
                    </div>
                    <i className="fa-solid fa-gear settings-icon"></i>
                    
                    <button onClick={handleSeeMoreClick}>Log In</button>
                </div>
            </header>
        </div>
    );
};

export default Header;
