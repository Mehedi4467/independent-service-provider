import React from 'react';
import './Self.css';
import self from '../../images/self.webp';

const Self = () => {
    return (
        <div className='self mt-5 '>

            <div className='row align-items-center'>

                <div className='col-12 col-md-6 '>
                    <h2 className='text-center mt-0 pt-0'>What I <span>Do</span></h2>
                    <div className='rounded-pill shadow mt-4 mt-md-5'>
                        <p className='p-5 text-muted'>Hey I am Will Jhone, a body builder who can lead you a healthier mind and life with personal attention and professional guidance</p>
                    </div>

                </div>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid rounded-3 mt-3' src={self} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Self;