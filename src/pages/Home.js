import React from 'react'
import '../styles/home.css';
import BG from '../assets/homebg.webp'
const Home = () => {
    return (
        <div className='home'>
            <div className="bg">
                <img src={BG} alt="" />
            </div>
            <div className="advert-text">
                <div className="top">Shawarma Hub</div>
                <div className="bottom">Flavors that Race to your Plate. Fast,Fresh and Fearless </div>
                <div className="food-image">
                    <div className="section">
                        <div className="x"></div>
                        <p>Crispy Fries</p>
                    </div>
                    <div className="section">
                        <div className="x"></div>
                        <p>Shawarma</p>
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
