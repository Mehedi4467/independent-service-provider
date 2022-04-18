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
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-3 text-center'>
                        <h5 className='text-primary shadow p-4 rounded-pill'>Gym Zone</h5>
                    </div>
                    <div className='col-12 col-md-3 mt-4 mt-md-0 quickLink text-center '>
                        <h5>Quick Link</h5>

                        <Link to="/">Home</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                    <div className='col-12 col-md-3 text-center mt-3 mt-md-0'>
                        <h5>Contact Us</h5>

                        <div>
                            <p className='p-0 m-0'><b>Address :</b> Shewrapara Mirpur 10</p>
                            <p className='p-0 my-1'><b>Phone :</b> 01784452434</p>
                            <p><b>Email :</b> gymzom@gmail.com</p>
                        </div>

                    </div>
                    <div className='col-12  text-center col-md-3 mt-3 mt-md-0'>
                        <h5>Payment Method</h5>
                        <div className='d-flex align-items-center'>

                            <div className='mt-2 mt-md-4 mx-auto'>
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