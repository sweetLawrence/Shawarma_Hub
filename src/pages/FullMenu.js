import React from 'react'
import '../styles/our-menu.css';
import SpecificMenu from '../components/SpecificMenu'
import Button from '../components/Button'
import ChipoMasala from '../assets/chipomasala.png'
import Shawarma from '../assets/shawarma_menu.png'
import Mango from '../assets/mango.jpg'
import Passion from '../assets/passion.jpg'
import Oreo from '../assets/oreo.jpg'
import Vanilla from '../assets/vanillashake.jpg'
import Fries from '../assets/fries-menu.png'
import Mkorogo from '../assets/mkorogo.png'
import Strawberry from '../assets/strawberry.png'
import Mshakiki from '../assets/mshakiki.jpg'
import Breast from '../assets/breast.jpg'
import Leg from '../assets/leg.png'
import OrderPage from '../components/OrderPage';
import { useEffect } from 'react';

const FullMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='our-menu full-menu'>
      <h2><span className='one'>Specialties</span><br /></h2>
      <div className="menuz">
        <h2 className='foodTitle'>Foods</h2>
        <div className="menuz foods">
          <SpecificMenu price='Ksh.80' image={Fries} food_name="Fries" description="Crunch into perfection with our golden Fries—irresistibly crispy and seasoned to perfection!" />
          <SpecificMenu price='Ksh.150' image={Shawarma} food_name="Shawarma" description="Savor the delicious flavor of our Shawarma, a taste sensation that delights every palate." />
          <SpecificMenu price='Ksh.250' image={Mkorogo} food_name="Mkorogo" description="Our yummy Mkorogo showcases kitchen artistry, a perfect gastronomic reflection." />
          <SpecificMenu price='Ksh.100' image={Mshakiki} food_name="Mshakiki" description="" />
          <SpecificMenu price='Ksh.170' image={Breast} food_name="Chicken Breast" description="" />
          <SpecificMenu price='Ksh.150' image={Leg} food_name="Chicken Leg" description="" />
        </div>

        <div className="drinks">
          <h2 className='foodTitle drinkTitle'>Drinks</h2>
          <div className="menuz">
          <SpecificMenu price='Ksh.150' image={Strawberry} food_name="Strawberry" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
                    <SpecificMenu price='Ksh.150' image={Vanilla} food_name="Vanilla Shake" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
                    <SpecificMenu price='Ksh.170' image={Oreo} food_name="Oreo Shake" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
                    <SpecificMenu price='Ksh.100' image={Mango} food_name="Mango Juice" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
                    <SpecificMenu price='Ksh.100' image={Passion} food_name="Passion Juice" description="Taste the pure bliss of our Strawberry Milkshake—a delightful symphony of sweetness." />
          </div>

        </div>



        {/* <OrderPage /> */}
      </div>
      <div className="more">
        {/* <Button content="More" /> */}
      </div>
    </div>
  )
}

export default FullMenu