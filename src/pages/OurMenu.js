import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu';
import Button from '../components/Button';
const OurMenu = () => {
    return (
        <div className='our-menu'>
            <h2><span className='one'>Specialties</span><br /><span className='lxc'>Our Menu</span></h2>
            <div className="menuz">
                <SpecificMenu price='Ksh.100' food_name="Chips Masala" description="Taste our delicious Chips Masala"/>
                <SpecificMenu price='Ksh.150' food_name="Shawarma" description="Taste our delicious Shawarma "/> 
            </div>
            <div className="more">
                <Button content="More" />
            </div>
        </div>
    )
}

export default OurMenu