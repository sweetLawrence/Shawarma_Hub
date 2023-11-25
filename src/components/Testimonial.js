import React from 'react'
import '../styles/testimonial.css';

const Testiomonial = ({ content, author }) => {
  return (
    <div className='testimonial'>
      <div className="content">
        {content}
      </div>
      <div className="name">
        {author}
      </div>
    </div>
  )
}

export default Testiomonial