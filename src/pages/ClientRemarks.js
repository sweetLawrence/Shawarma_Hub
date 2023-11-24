import React from 'react'
import '../styles/client-remarks.css';
import Testimonial from '../components/Testimonial';

const ClientRemarks = () => {
  return (
    <div className='client'>
        <h2><span className='one'>testimonials</span> <br /> <span className='lxc'>Client Remarks</span></h2>
        <div className="bottom">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        </div>
       
    </div>
  )
}

export default ClientRemarks