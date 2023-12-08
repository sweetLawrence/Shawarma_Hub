import React from 'react'
import '../styles/button.css';

const Button = ({content,onClick}) => {
  return (
    <div className='button' onClick={onClick}>
        <button className='std-btn'>{content}</button>
    </div>
  )
}

export default Button