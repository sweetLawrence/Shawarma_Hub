import React from 'react'
import '../styles/orderpage.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [number, setNumber] = useState(1);
    const [newprice, setNewprice] = useState(1);


    const location = useLocation();
    const { food_name, price } = location.state || {};
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // function minusOrder() {
    //     if (!number==0) {
    //         setNumber(() => number - 1);
    //         setNewprice(()=>number*Number(price.slice(4)));
    //         setQuantity(()=>quantity-1)
    //     }
    // }
    // function plusOrder() {
    //     setNumber(() => number + 1);
    //     setNewprice(()=>number*Number(price.slice(4)));
    //     setQuantity(()=>quantity+1)
    // }



    function minusOrder() {
        if (number > 0) {
            setNumber((prevNumber) => prevNumber - 1);
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    }
    
    function plusOrder() {
        setNumber((prevNumber) => prevNumber + 1);
        setQuantity((prevQuantity) => prevQuantity + 1);
    }
    
    useEffect(() => {
        setNewprice(number * Number(price.slice(4)));
    }, [number, price]);



    console.log(number,newprice)
    return (
        <div className='orderpage'>
            <div className="name">Shawarma Hub</div>
            <div className="details">
                <div className="top">
                    <div className="left">{price}</div>
                    <div className="right">
                        <span className="minus"
                            onClick={minusOrder}
                        ><FaMinus /></span>
                        <span className='qty'>{quantity}</span>
                        <span className="plus"
                            onClick={plusOrder}
                        ><FaPlus /></span>
                    </div>
                </div>
                <div className="middle">
                    <div className="input-object">
                        <label htmlFor="">Order:</label>
                        <input type="text" className="receipient" value={food_name} />
                    </div>
                    <div className="input-object">
                        <label htmlFor="">Receipient:</label>
                        <input type="text" className="receipient" placeholder='Enter Your Name' />
                    </div>
                    <div className="input-object">
                        <label htmlFor="">Apartment:</label>
                        <input type="text" className="receipient" placeholder='Enter Your Apartment Name' />
                    </div>
                    {/* <div className="input-object company">
                        <label htmlFor="">From:</label>
                        <input type="text" className="receipient" value="ShawarmaHub" />
                    </div> */}

                </div>
                <div className="bottom">


                </div>
            </div>
            <div className="payment">
                <h3>Enter Your Phone Number</h3>
                <input type='number' placeholder='Enter Phone Number (Saf)' min="0"/>
                <div className="pay-btn">
                    {/* <Button content="Pay" /> */}
                    <button className='pay-btn'>Pay</button>
                </div>

            </div>
        </div>
    )
}

export default OrderPage