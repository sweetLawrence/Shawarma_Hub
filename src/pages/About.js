import React from 'react'
import '../styles/about.css';
import About1 from '../assets/about2.jpg'
const About = () => {
    return (
        <div className='about'>
            <div className="upper">
                <div className="image-section">
                    <div className="ab-img">
                        <img src={About1} alt="ab1" />
                    </div>
                    {/* <div className="ab-img">
                        <img src={About1} alt="ab1" />
                    </div> */}
                </div>
                <div className="content">
                    <h2><span className='one'>about</span> <br /> <span className='lxc'>Shawarma Hub</span></h2>

                    <p className="cont">
                        Welcome to Shawarma Hub, where you can get delicious fast food whenever you want it. Enter a world of culinary delight where our skillfully prepared shawarmas and wide range of menu items promise a tasty adventure that will satisfy every craving. Shawarma Hub is the place to go if you're looking for a quick and delicious meal that is also committed to quality and speed.
                    </p>
                    {/* <p className="cont">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p> */}
                    <div className="time">
                        Monday-Sunday <span className='bold'>2:00 pm-9:00pm</span>
                    </div>
                    <div className="phone">
                        +254 1120 797 85
                    </div>
                </div>
            </div>
            <div className="lower"></div>
        </div>
    )
}

export default About