import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu';
import Button from '../components/Button';
import ChipoMasala from '../assets/chipomasala.png'
import Shawarma from '../assets/shawarma_menu.png'
import Fries from '../assets/fries-menu.png'
import Mkorogo from '../assets/mkorogo.png'
import Strawberry from '../assets/strawberry.png'
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
                <SpecificMenu price='Ksh.80' image={Fries} food_name="Fries" description="Crunch into perfection with our golden Fries—irresistibly crispy and seasoned to perfection!" />
                <SpecificMenu price='Ksh.150' image={Shawarma} food_name="Shawarma" description="Savor the delicious flavor of our Shawarma, a taste sensation that delights every palate." />
                <SpecificMenu price='Ksh.250' image={Mkorogo} food_name="Mkorogo" description="Our yummy Mkorogo showcases kitchen artistry, a perfect gastronomic reflection." />
                <SpecificMenu price='Ksh.150' image={Strawberry} food_name="Strawberry" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
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