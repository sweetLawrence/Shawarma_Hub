import React from 'react'
import '../styles/specific-menu.css';
import About1 from '../assets/about2.jpg'
const SpecificMenu = () => {
    return (
        <div className='specific-menu'>
            <div className="container">
                <div className="left">
                    <img src={About1} alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        <h3>Chips Masala</h3>
                        <p>Ksh.150</p>
                    </div>
                    <p className="content">Chipo Masala plus soda</p>
                    <button className='std-btn'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default SpecificMenu