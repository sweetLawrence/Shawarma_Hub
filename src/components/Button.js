import React from 'react'
import '../styles/button.css';

const Button = ({content}) => {
  return (
    <div className='button'>
        <button className='std-btn'>{content}</button>
    </div>
  )
}

export default Button