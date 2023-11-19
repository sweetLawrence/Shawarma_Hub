import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu';
import Button from '../components/Button';
const OurMenu = () => {
    return (
        <div className='our-menu'>
            <h2><span className='one'>Specialties</span><br /><span className='lxc'>Our Menu</span></h2>
            <div className="menuz">
                <SpecificMenu />
                <SpecificMenu />
                <SpecificMenu />   
                <SpecificMenu />   
            </div>
            <div className="more">
                <Button />
            </div>
        </div>
    )
}

export default OurMenu