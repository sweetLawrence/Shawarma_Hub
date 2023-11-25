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
                <SpecificMenu price='Ksh.100' image={ChipoMasala} food_name="Chips Masala" description="Enjoy the delicious delight of our Masala Chips."/>
                <SpecificMenu price='Ksh.150' image={Shawarma} food_name="Shawarma" description="Savor the delicious flavor of our Shawarma."/>
                <SpecificMenu price='Ksh.80' image={Fries} food_name="Fries" description="Our golden fries will crunch to perfection."/>
                <SpecificMenu price='Ksh.150' image={Strawberry}  food_name="Strawberry" description="Taste the pure bliss of our Milkshake with Strawberry."/>  
            </div>
            <div className="more">
                <Button content="More" />
            </div>
        </div>
    )
}

export default OurMenu