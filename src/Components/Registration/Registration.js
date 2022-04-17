import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';


const Registration = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();



    const handelSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/');



    }




    return (
        <div className='col-md-6 col-12 mx-auto my-3 shadow-lg p-5 rounded'>
            <Form onSubmit={handelSubmit}>
                <h2 className='mb-4 text-center text-primary'>Welcome to Registration</h2>
                <p className='text-center my-4 text-danger'>{error && error?.message}</p>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextName">
                    <Col sm="10">
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEmail">

                    <Col sm="10">
                        <Form.Control type="email" name='email' placeholder="Your Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">

                    <Col sm="10">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Col>
                </Form.Group>




                <Form.Check
                    onClick={() => setAgree(!agree)}
                    className='ms-md-5 ms-0 mb-3 mt-1'
                    name="agree"
                    type="switch"
                    id="custom-switch"
                    label="I agree to the Terms and Privacy Policy"
                />

                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">
                    {
                        loading ? <Button className='w-50 d-block mx-auto' type="button" disabled>
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </Button> : <Button type="submit" className='w-50 d-block mx-auto' disabled={!agree} variant="primary">Registration</Button>
                    }

                    <p className='text-center mt-3'>Already have an account?  <Link to='/login'>Login!</Link> </p>
                </Form.Group>


            </Form>
            <div className='d-flex justify-content-center mt-4 align-items-center'>
                <div className='divider'></div>
                <div className='text-primary mx-3'>Or</div>
                <div className='divider'></div>
            </div>

            <div>
                <SocialMedia></SocialMedia>
            </div>

        </div>
    );
};

export default Registration;