// src/App.jsx
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Blog, Contact } from './Pages/index';

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
