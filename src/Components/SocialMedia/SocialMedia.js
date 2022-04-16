import React from 'react';
import auth from '../../firebase.init';
import google from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialMedia = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user)
    }
    return (
        <div onClick={() => signInWithGoogle()} className="w-50 mx-auto py-1 rounded-pill d-flex align-items-center btn-primary mt-4 btn justify-content-center">
            {
                loading && <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            <img src={google} height='30' width='30' className="rounded-circle" alt="" />
            <div className="align-items-self-center text-white ms-3">Sign With Google</div>
        </div>
    );
};

export default SocialMedia;