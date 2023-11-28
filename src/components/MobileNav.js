import React, { useEffect, useState } from 'react'
import '../styles/mobilenav.css';
import 'animate.css'
import { Link } from 'react-router-dom'
import { Navdata } from './data/Navdata'

const MobileNav = ({ closeMobileNav }) => {
  const handleItemClick = () => {
    closeMobileNav();
  };

  return (
    <div className='mobile-nav animate__animated animate__backInRight'>
      <div className="navigation">
        <ul>
          {Navdata.map((item, index) => (
            // <li className='mobile-row' key={index}>
              <Link
                className='link'
                onClick={handleItemClick}
                to={`/${item.toLowerCase()}`}
              >
                <li className='mobile-row' key={index}>{item}</li>
              </Link>
            // </li>
            // <li className='mobile-row' key={index}>{item}</li>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default MobileNav