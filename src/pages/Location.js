import React from 'react'
import '../styles/location.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
    return (
        <div className="location">
            <h2><span className='one'>location</span> <br /> <span className='lxc'>Our Place</span></h2>
            <div className='map'>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15668.451604600126!2d34.74649861460345!3d-0.8079920658192632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stechnical%20training%20institute%20near%20Orogare!5e0!3m2!1sen!2ske!4v1673092282257!5m2!1sen!2ske"
                    width="90%" height="450"
                    style={{ border: "0", margin: "auto" }} allowFullScreen=""
                    loading="lazy"
                    title='Google Map Location'
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe> */}
                {/* <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB-RajztGLxgRzv6fectcPqw&key=AIzaSyBlVt4BBWKdjF6eF7AW9tvLEF4sZyCAZHQ"
                 width="100%" height="450" 
                 style={{ border: "0", margin: "auto" }} 
                 loading="lazy" 
                 title='Google Map Location'
                 allowfullscreen
                 referrerPolicy="no-referrer-when-downgrade">
                </iframe> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0815205575245!2d37.010231074048676!3d-1.1011398988882917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463b8f5ae407%3A0xac3e5ccb799ffece!2sPeak%20House!5e0!3m2!1sen!2ske!4v1701006335963!5m2!1sen!2ske" 
                // width="600" height="450" 
                // style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
        </div>

    )
    // AIzaSyBlVt4BBWKdjF6eF7AW9tvLEF4sZyCAZHQ
}

export default Location