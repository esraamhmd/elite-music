import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Main/Login';
import Signup from './components/Main/Signup';
import Trend from './components/TrendMarina/Trend';
import Art from './components/ArRawdwa/Art'; // Adjust this path as necessary
import New from './components/New/New';
import Pop from './components/FarahPopular/Pop';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/trending" element={<Trend />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/new" element={<New />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
