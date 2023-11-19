import React from 'react'
import '../styles/home.css';
import BG from '../assets/homebg.jpg'
import Fries from '../assets/fries.jpg'
const Home = () => {
    return (
        <div className='home'>
            <div className="bg">
                <img src={BG} alt="" />
            </div>
            <div className="advert-text">
                <div className="top">Shawarma Hub</div>
                <div className="bottom">Flavors that race to ur plate. Fast,fresh and fearless </div>
                <div className="food-image">
                    <div className="section">
                        <div className="x"></div>
                        <p>crispy fries</p>
                    </div>
                    <div className="section">
                        <div className="x"></div>
                        <p>shawarma</p>
                    </div>
                    <div className="section">
                        <div className="x"></div>
                        <p>Chips Masala</p>
                    </div>
                    <div className="section">
                        <div className="x"></div>
                        <p>Chicken Tikka</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home