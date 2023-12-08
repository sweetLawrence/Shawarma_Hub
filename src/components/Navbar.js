import React, { useEffect, useState } from 'react'
import '../styles/navbar.css';
import { Link } from 'react-router-dom'

import { Navdata } from './data/Navdata'
const Navbar = ({ toggleMobileNav }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navbarStyles = {
        backgroundColor: scrollPosition > 300 ? '#fff' : 'rgb(0, 0, 0,.85)',
        
        color: scrollPosition > 300 ? '#000' : '#fff',
        transition: 'background-color 0.3s, color 0.3s',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
    };

    const menuStyles = {
        backgroundColor: scrollPosition > 300 ? '#000' : '#fff',
    };

    const handleItemClick = (item) => {
        setActiveItem(item.toLowerCase());
    };

    function handleClick() {
        toggleMobileNav()
        console.log("clicked")
    }
    return (
        <div className='navbar' style={navbarStyles}>
            {/* <div className="top">
                <p className="phone">+254 112079785</p>
                <p className="email">shawarmahub@gmail.com</p>
                <p className="openhrs">Open Hours:Monday-Sunday 2:00 pm-9:00pm</p>
            </div> */}
            <div className="bottom">
                <div className="left">Shawarma Hub</div>

                <div className="menu" onClick={handleClick}>
                    <span style={menuStyles}></span>
                    <span style={menuStyles}></span>
                    <span style={menuStyles}></span>

                </div>

                <div className="right">
                    <ul>
                        {Navdata.map((item, index) => (
                            <Link
                                onClick={() => handleItemClick(item)}
                                style={{
                                    color: activeItem === item.toLowerCase() ? '#d4af7b' : (scrollPosition > 300 ? '#000' : '#fff'),
                                    textDecoration: 'none',
                                }}
                                to={`/${item.toLowerCase()}`}>
                                <li
                                    className='row' key={index}>{item}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar