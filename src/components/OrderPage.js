import React, { useRef } from 'react'
import '../styles/orderpage.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const OrderPage = () => {
    const navigate = useNavigate();
    
    const nameRef = useRef();
    const apartmentRef = useRef();
    const phoneRef = useRef();

    const [quantity, setQuantity] = useState(1);
    const [number, setNumber] = useState(1);
    const [newprice, setNewprice] = useState(1);

    const location = useLocation();
    const { food_name, price } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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

    //Post request functions
   async function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            name: nameRef.current.value,
            apartment: apartmentRef.current.value,
            phone: phoneRef.current.value,
            quantity: quantity,
            totalPrice: newprice,
            food_name: food_name
        }
        nameRef.current.value = '';
        apartmentRef.current.value = '';
        phoneRef.current.value = '';

        try {
            const response = await axios.post('http://localhost:5000/payment', postData);
            // setData(response.data);
            console.log("Successful")
            console.log(response.data)
            navigate('/')

        } catch (error) {
            // setError(error.response ? error.response.data : error.message);
        }
        // console.log(Object.values(postData))

    };
   

// console.log(number, newprice)
return (
    <form onSubmit={handleSubmit}>
        <div className='orderpage'>
            <div className="name">Shawarma Hub</div>
            <div className="details">
                <div className="top">
                    <div className="left">Ksh.{newprice}</div>
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
                        <input type="text"
                            ref={nameRef}
                            className="receipient" placeholder='Enter Your Name' />
                        {/* pick name */}
                    </div>
                    <div className="input-object">
                        <label htmlFor="">Apartment:</label>
                        <input type="text" className="receipient"
                            ref={apartmentRef}
                            placeholder='Enter Your Apartment Name' />
                        {/* pick aparatment */}
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
                <input type='number'
                    ref={phoneRef}
                    placeholder='Enter Phone Number (Saf)' min="0" />
                {/* pick number */}
                <div className="pay-btn">
                    <button className='pay-btn'>Pay</button>
                </div>

            </div>
        </div>
    </form>

)
}

export default OrderPage