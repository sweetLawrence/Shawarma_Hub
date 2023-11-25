import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu';
import Button from '../components/Button';
import ChipoMasala from '../assets/chipomasala.png'
import Shawarma from '../assets/shawarma_menu.png'
import Fries from '../assets/fries-menu.png'
import Strawberry from '../assets/strawberry.png'
const OurMenu = () => {
    return (
        <div className='our-menu'>
            <h2><span className='one'>Specialties</span><br /><span className='lxc'>Our Menu</span></h2>
            <div className="menuz">
                <SpecificMenu price='Ksh.100' image={ChipoMasala} food_name="Chips Masala" description="Taste our delicious Chips Masala"/>
                <SpecificMenu price='Ksh.150' image={Shawarma} food_name="Shawarma" description="Taste our delicious Shawarma Taste our delicious Shawarma"/>
                <SpecificMenu price='Ksh.80' image={Fries} food_name="Fries" description="Taste our delicious Fries"/>
                <SpecificMenu price='Ksh.150' image={Strawberry}  food_name="Strawberry" description="Taste our delicious Shawarma Taste our delicious Shawarma"/>  
            </div>
            <div className="more">
                <Button content="More" />
            </div>
        </div>
    )
}

export default OurMenu