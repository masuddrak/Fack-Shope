import React from 'react';
import './Header.css'

const Header = ({count}) => {
    console.log(count)
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">LOGO</div>
                <div className="menu">
                    <li>total product :{count.length}</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts  </li>
                </div>
            </div>
        </div>
    );
};

export default Header;