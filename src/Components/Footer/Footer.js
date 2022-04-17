import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import bkash from '../../images/bkash.svg';
import visa from '../../images/visa.png';
import masterCard from '../../images/masterCard.png';

const Footer = () => {
    return (
        <div className='bg-light mt-5'>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-6 col-md-3 d-flex align-items-center'>
                        <h2 className='text-primary'>Gym Zone</h2>
                    </div>
                    <div className='col-6 col-md-3 quickLink'>
                        <h5>Quick Link</h5>

                        <Link to="/">Home</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">Log In</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div className='col-6 col-md-3'>
                        <h5>Contact Us</h5>
                        <div className='d-flex align-items-center'>
                            <div>
                                <p><b>Address :</b> Shewrapara Mirpur 10</p>
                                <p><b>Phone :</b> 01784452434</p>
                                <p><b>Email :</b> gymzom@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <h5>Payment Method</h5>
                        <div className='d-flex align-items-center'>

                            <div className='mt-4'>
                                <img src={bkash} width='40px' alt="bkash payment method" />
                                <img src={visa} width='40px' alt="bkash payment method" />
                                <img src={masterCard} width='40px' alt="bkash payment method" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;