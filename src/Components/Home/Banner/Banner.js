import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='row justify-content-between align-items-center'>
            <div className='col-12 col-md-6 text-start'>
                <h2 className='text-primary text-uppercase'>This is Banner Title</h2>
                <p className='text-muted mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim.
                </p>
            </div>
            <div className='col-12 col-md-6'>
                <img className='img-fluid rounded-3' src={banner} alt="this is banner images" />
            </div>

        </div>
    );
};

export default Banner;