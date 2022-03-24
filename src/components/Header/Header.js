import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">LOGO</div>
                <div className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
            </div>
        </div>
    );
};

export default Header;