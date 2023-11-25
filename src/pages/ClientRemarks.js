import React from 'react'
import '../styles/client-remarks.css';
import Testimonial from '../components/Testimonial';
import Marquee from "react-fast-marquee";

const ClientRemarks = () => {
    return (
        <div className='client'>
            <h2><span className='one'>testimonials</span> <br /> <span className='lxc'>Client Remarks</span></h2>
            <div className="bottom">
                <Marquee pauseOnHover speed="50">
                    <Testimonial content="Quick bites with a gourmet touch – that's what sets this food joint apart. The delivery is impressively fast, and every item on their menu is a delight. My favorite guilty pleasure, delivered promptly!" author="Lawrence Tsungu"/>
                    <Testimonial content="Quick and tasty – that's how I would describe this fast-food joint! The delivery service is prompt, and the quality of the food is consistently top-notch. My go-to spot for a satisfying meal on busy days." author="John Doe"/>
                    <Testimonial content="Absolutely love ordering from this food joint! The delivery is always lightning fast, and the food arrives hot and delicious. Their burgers are a game-changer!" author="Spongebob Squarepants"/>
                    
                </Marquee>

            </div>

        </div>
    )
}

export default ClientRemarks