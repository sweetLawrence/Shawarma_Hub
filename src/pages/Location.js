import React from 'react'
import '../styles/location.css';

const Location = () => {
    return (
        <div className="location">
            <h2><span className='one'>Location</span> <br /> <span className='lxc'>Our Place</span></h2>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0815205575245!2d37.010231074048676!3d-1.1011398988882917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463b8f5ae407%3A0xac3e5ccb799ffece!2sPeak%20House!5e0!3m2!1sen!2ske!4v1701006335963!5m2!1sen!2ske"
                    width="90%" height="450"
                    style={{ border: "0", margin: "auto" }}
                    allowfullscreen=""
                    loading="lazy"
                    title='Google Map Location'
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

    )
}

export default Location