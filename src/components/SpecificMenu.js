import React from 'react'
import '../styles/specific-menu.css';
import { Link,useNavigate } from 'react-router-dom'
import About1 from '../assets/about2.jpg'
import Button from './Button';
import OrderPage from './OrderPage';
import { useState } from 'react';
const SpecificMenu = ({ price, food_name, description, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigation = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
        navigation('/payment')

    };

    // const closeModal = () => {
    //     setIsModalOpen(false);

    // };
    return (
        <div className='specific-menu'>
            <div className="container">
                <div className="left">
                    <img src={image} alt="" />
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
                    <Button content="Order Now" onClick={openModal} />
                </div>
            </div>
        </div>
    )
}

export default SpecificMenu