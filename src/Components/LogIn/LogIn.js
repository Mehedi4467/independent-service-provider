import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './LogIn.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending, resetEmailError] = useSendPasswordResetEmail(auth);
    const [resetEmail, setResetEmail] = useState('');

    const handelSignInEmailAndPassword = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate('/');
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(resetEmail);
        toast('Email Send');
    }

    return (
        <Form onSubmit={handelSignInEmailAndPassword}>
            <div className='col-md-6 col-12  mx-auto mt-5 shadow-lg p-5 rounded'>
                <h2 className='mb-4 text-center text-primary'>Welcome to Log In</h2>
                <p className='text-center my-4 text-danger'>{error && error?.message}</p>
                <p className='text-center my-4 text-danger'>{resetEmailError && resetEmailError?.message}</p>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEmail">

                    <Col sm="10">
                        <Form.Control onChange={(e) => setResetEmail(e.target.value)} type="email" name="email" placeholder="Your Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">

                    <Col sm="10">
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                <div>

                    {
                        loading ? <Button className='w-50 d-block mx-auto' type="button" disabled>
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </Button> : <Button type="submit" className='w-50 d-block mx-auto' variant="primary">Log In</Button>
                    }
                    <p className='text-center mt-3'>Don’t have an account? <Link to='/registration'>Registration!</Link> </p>
                    <p className='text-center mt-3 text-primary' onClick={resetPassword} style={{ cursor: 'pointer' }}><u>Forgot Password?</u></p>
                </div>

                <div className='d-flex justify-content-center mt-4 align-items-center'>
                    <div className='divider'></div>
                    <div className='text-primary mx-3'>Or</div>
                    <div className='divider'></div>
                </div>

                <div>
                    <SocialMedia></SocialMedia>
                </div>
                <ToastContainer />
            </div>

        </Form >
    );
};

export default LogIn;