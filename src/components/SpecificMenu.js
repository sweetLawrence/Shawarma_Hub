import React from 'react'
import '../styles/specific-menu.css';
import About1 from '../assets/about2.jpg'
import Button from './Button';
const SpecificMenu = ({ price, food_name, description }) => {
    return (
        <div className='specific-menu'>
            <div className="container">
                <div className="left">
                    <img src={About1} alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        {/* <h3>Chips Masala</h3> */}
                        <h3>{food_name}</h3>
                        {/* <p>Ksh.150</p> */}
                        <p className='price'>{price}</p>
                    </div>
                    {/* <p className="content">Chipo Masala plus soda</p> */}
                    <p className='content'>{description}</p>
                    {/* <button className='std-btn'>Order Now</button> */}
                    <Button content="Order Now" />
                </div>
            </div>
        </div>
    )
}

export default SpecificMenu