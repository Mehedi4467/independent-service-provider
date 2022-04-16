import React from 'react';
import google from '../../images/google.png';
const SocialMedia = () => {

    const [signInWithMicrosoft, user, loading, error] = useSignInWithMicrosoft(
        auth
    );

    return (
        <div className="w-50 mx-auto py-1 rounded-pill d-flex align-items-center btn-primary mt-5 btn justify-content-center">
            <img src={google} height='30' width='30' className="rounded-circle" alt="" />
            <div className="align-items-self-center text-white ms-3">Sign With Google</div>
        </div>
    );
};

export default SocialMedia;