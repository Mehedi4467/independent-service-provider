import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="container">
            <div className='d-flex justify-content-center mt-5'>
                <img className='img-fluid' width='50%' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;