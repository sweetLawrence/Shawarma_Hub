import React, { useEffect, useState } from 'react'
import '../styles/navbar.css';

import { Navdata } from './data/Navdata'
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
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
        backgroundColor: scrollPosition > 300 ? '#fff' : 'transparent',
        color: scrollPosition > 300 ? '#000' : '#fff',
        transition: 'background-color 0.3s, color 0.3s',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        // padding: '15px',
        zIndex: 1000,
      };
    return (
        <div className='navbar' style={navbarStyles}>
            {/* <div className="top">
                <p className="phone">+254 112079785</p>
                <p className="email">shawarmahub@gmail.com</p>
                <p className="openhrs">Open Hours:Monday-Sunday 2:00 pm-9:00pm</p>
            </div> */}
            <div className="bottom"  >
                <div className="left">Shawarma Hub</div>
                <div className="right">
                    <ul>
                        {Navdata.map((item, index) => (
                            <li className='row' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar