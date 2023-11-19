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
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p className="cont">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <div className="time">
                        Monday-Sunday <span className='bold'>2:00 pm-9:00pm</span>
                    </div>
                    <div className="phone">
                    +254 7195 028 91
                    </div>
                </div>
            </div>
            <div className="lower"></div>
        </div>
    )
}

export default About