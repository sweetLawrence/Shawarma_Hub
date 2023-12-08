import React from 'react'
import '../styles/orderpage.css';
import Button from './Button';

const OrderPage = () => (
    <div className='orderpage'>
        <div className="name">Shawarma Hub</div>
        <div className="details">
            <div className="top">
                <div className="left">Ksh.80</div>
                <div className="right">Receipt</div>
            </div>
            <div className="middle">
                <div className="input-object">
                    <label htmlFor="">To:</label>
                    <input type="text" className="receipient" placeholder='Enter Your Name' />
                </div>
                <div className="input-object">
                    <label htmlFor="">Apartment:</label>
                    <input type="text" className="receipient" placeholder='Enter Your Apartment Name'/>
                </div>
                <div className="input-object company">
                    <label htmlFor="">From:</label>
                    <input type="text" className="receipient" value="ShawarmaHub.Inc" />
                </div>

            </div>
            <div className="bottom">


            </div>
        </div>
        <div className="payment">
            <h3>Enter Your Phone Number</h3>
            <input type='number' placeholder='Enter Phone Number (Saf)'/>
            <div className="pay-btn">
                {/* <Button content="Pay" /> */}
                <button className='pay-btn'>Pay</button>
            </div>

        </div>
    </div>
)

export default OrderPage