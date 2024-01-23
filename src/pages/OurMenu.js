import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu';
import Button from '../components/Button';
import ChipoMasala from '../assets/chipomasala.png'
import Shawarma from '../assets/shawarma_menu.png'
import Fries from '../assets/fries-menu.png'
import Mkorogo from '../assets/mkorogo.png'
import Strawberry from '../assets/strawberry.png'
import Mango from '../assets/mango.jpg'
import Passion from '../assets/passion.jpg'
import Oreo from '../assets/oreo.jpg'
import Vanilla from '../assets/vanillashake.jpg'
import Breast from '../assets/breast.jpg'
import Leg from '../assets/leg.png'
import Mshakiki from '../assets/mshakiki.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const OurMenu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='our-menu'>
            <h2><span className='one'>Specialties</span><br /><span className='lxc'>Our Menu</span></h2>
            <div className="menuz">
                <h2 className='foodTitle'>Foods</h2>
                <div className="menuz foods">
                    <SpecificMenu price='Ksh.80' image={Fries} food_name="Fries" description="Crunch into perfection with our golden Fries—irresistibly crispy and seasoned to perfection!" />
                    <SpecificMenu price='Ksh.150' image={Shawarma} food_name="Shawarma" description="Savor the delicious flavor of our Shawarma, a taste sensation that delights every palate." />
                    <SpecificMenu price='Ksh.250' image={Mkorogo} food_name="Mkorogo" description="Our yummy Mkorogo showcases kitchen artistry, a perfect gastronomic reflection." />
                    <SpecificMenu price='Ksh.170' image={Breast} food_name="Chicken Breast" description="" />
                </div>
                <div className="drinks">
                    <h2 className='foodTitle drinkTitle'>Drinks</h2>
                    <div className="menuz">
                    <SpecificMenu price='Ksh.150' image={Strawberry} food_name="Strawberry" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
                    <SpecificMenu price='Ksh.150' image={Vanilla} food_name="Vanilla Shake" description="Indulge in the creamy goodness of our Vanilla Shake—a classic treat for your taste." />
                    </div>
                </div>
               
            </div>
            <div className="more">
                <Link className='link' to="/menu">
                    More <span className='arrow-right'>&#8594;</span>
                </Link>



            </div>
        </div>
    )
}

export default OurMenu