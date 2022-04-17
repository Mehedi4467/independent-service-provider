import React, { useState } from 'react';
import auth from '../../firebase.init';
import google from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialMedia = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <p className='text-center my-4 text-danger'>{error && error?.message}</p>
            <div onClick={() => signInWithGoogle()} className="col-md-6 col-12 mx-auto py-1 rounded-pill d-flex align-items-center btn-primary mt-4 btn justify-content-center">
                {
                    loading && <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <img src={google} height='30' width='30' className="rounded-circle" alt="" />
                <div className="align-items-self-center text-white ms-3">Sign With Google</div>
            </div>
        </div>
    );
};

export default SocialMedia;