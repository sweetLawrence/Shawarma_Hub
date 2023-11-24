import React from 'react'
import '../styles/client-remarks.css';
import Testimonial from '../components/Testimonial';
import Marquee from "react-fast-marquee";

const ClientRemarks = () => {
    return (
        <div className='client'>
            <h2><span className='one'>testimonials</span> <br /> <span className='lxc'>Client Remarks</span></h2>
            <div className="bottom">
                <Marquee pauseOnHover speed="30">
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </Marquee>

            </div>

        </div>
    )
}

export default ClientRemarks