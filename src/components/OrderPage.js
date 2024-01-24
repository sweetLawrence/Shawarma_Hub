import React, { useRef } from 'react'
import '../styles/orderpage.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Button from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Spinner';


const OrderPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        // toast.success('Order Submitted successfully');
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_23a4bb7', 'template_a8ss86x', {
            food_name: e.target.food_name.value,
            name: nameRef.current.value,
            apartment: apartmentRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            quantity: quantity,
            price: newprice,
            order_number: uuidv4().toUpperCase(),
            date: `${new Date().toLocaleDateString('en-GB')}`
        }, 'Pfw6-oH9_6M5Hj0Kw').then((result) => {
            console.log(result.text);
            toast.success('Order Submitted successfully');
            setLoading(false);
            setTimeout(() => {
                navigate('/menu')
            }, 2500);
            
        }, (error) => {
            console.log(error.text);
            setLoading(false);
            toast.error('Failed to Submit Order. Try Again');
        });

        // Other code to reset form and update state variables
    };


    const nameRef = useRef();
    const apartmentRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

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



    // console.log(number, newprice)
    return (
        <form ref={form} onSubmit={sendEmail}>
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
                            <label htmlFor="food">Order:</label>
                            <input type="text" id='food' className="food" name='food_name' value={food_name} />
                        </div>
                        <div className="input-object">
                            <label htmlFor="receipient">Receipient:</label>
                            <input type="text"
                                ref={nameRef}
                                id='receipient'
                                autoComplete='true'
                                required
                                className="receipient" name='name' placeholder='Enter Your Name' />
                            {/* pick name */}
                        </div>
                        <div className="input-object">
                            <label htmlFor="apartment">Apartment:</label>
                            <input type="text" id='apartment' className="receipient"
                                ref={apartmentRef}
                                name='apartment'
                                required
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
                    <h3>Enter Your Email Here</h3>
                    <input type='email'
                        ref={emailRef}
                        name='email'
                        required
                        autoComplete='true'
                        placeholder='Enter email (order confirmation)' />
                    <h3>Enter Your Phone Number</h3>
                    <input type='number'
                        ref={phoneRef}
                        name='phone'
                        required
                        autoComplete='true'
                        placeholder='Enter Phone Number' min="0" />
                    {/* pick number */}
                    <div className="pay-btn paybtnx">
                        <button type="submit" className='pay-btn '> {loading ? <Spinner /> : 'Order'}</button>
                    </div>

                </div>
                
            </div>
            <Toaster richColors position="top-center" />
        </form>

    )
}

export default OrderPage























// async function handleSubmit(e) {
//     e.preventDefault();
//     const postData = {
//         name: nameRef.current.value,
//         apartment: apartmentRef.current.value,
//         phone: phoneRef.current.value,
//         quantity: quantity,
//         totalPrice: newprice,
//         food_name: food_name
//     }
//     nameRef.current.value = '';
//     apartmentRef.current.value = '';
//     phoneRef.current.value = '';

//     try {
//         const response = await axios.post('http://localhost:5000/payment', postData);
//         // setData(response.data);
//         console.log("Successful")
//         console.log(response.data)
//         navigate('/')

//     } catch (error) {
//         // setError(error.response ? error.response.data : error.message);
//     }
//     // console.log(Object.values(postData))

// };