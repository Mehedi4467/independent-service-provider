
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';

const Registration = () => {
    return (
        <Form>
            <div className='w-50 mx-auto mt-5 shadow-lg p-5 rounded'>
                <h2 className='mb-4 text-center text-primary'>Welcome to Registration</h2>

                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">

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
                    <p className='text-center mt-3'>Already have an account?  <Link to='/login'>Login!</Link> </p>
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

export default Registration;