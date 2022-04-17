import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './LogIn.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';




const LogIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handelSignInEmailAndPassword = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate('/');
    }

    return (
        <Form onSubmit={handelSignInEmailAndPassword}>
            <div className='col-md-6 col-12  mx-auto mt-5 shadow-lg p-5 rounded'>
                <h2 className='mb-4 text-center text-primary'>Welcome to Log In</h2>
                <p className='text-center my-4 text-danger'>{error && error?.message}</p>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEmail">

                    <Col sm="10">
                        <Form.Control type="email" name="email" placeholder="Your Email" required />
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
                    <p className='text-center mt-3'><Link to='/registration'>Forgot Password?</Link> </p>
                </div>

                <div className='d-flex justify-content-center mt-4 align-items-center'>
                    <div className='divider'></div>
                    <div className='text-primary mx-3'>Or</div>
                    <div className='divider'></div>
                </div>

                <div>
                    <SocialMedia></SocialMedia>
                </div>

            </div>

        </Form>
    );
};

export default LogIn;