import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './LogIn.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';




const LogIn = () => {

    return (
        <Form>
            <div className='col-md-6 col-12  mx-auto mt-5 shadow-lg p-5 rounded'>
                <h2 className='mb-4 text-center text-primary'>Welcome to Log In</h2>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEmail">

                    <Col sm="10">
                        <Form.Control type="email" placeholder="Your Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">

                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <div>
                    <Button className='w-50 d-block mx-auto' variant="primary">Log In</Button>
                    <p className='text-center mt-3'>Don’t have an account? <Link to='/registration'>Registration!</Link> </p>
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