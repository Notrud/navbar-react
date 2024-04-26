import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import nightmode from '../../assets/icon/night-mode.png';
import lightmode from '../../assets/icon/light-mode.png';
import searchw from '../../assets/icon/search-w.png';
import searchb from '../../assets/icon/search-b.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <nav className={`navbar`}>
            <Link to="/">
                <img 
                    src={logo} 
                    alt="Home" 
                    className={`logo ${theme === 'light' ? 'b-black' : 'b-white'}`} 
                />
            </Link>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? searchw : searchb} alt="" />
            </div>

            <img onClick={toggle_mode} src={theme === 'light' ? nightmode : lightmode} alt="" className='toggle-icon' />
        </nav>
    );
};

export default Navbar;
