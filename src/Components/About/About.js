import React from 'react';
import myPhoto from '../../images/mypic.png';

const About = () => {
    return (
        <div className='container py-2 py-md-5 my-2 my-md-5'>
            <div className='row justify-content-between align-items-center gy-4 gy-md-1'>
                <div className='col-12 col-md-6 shadow p-5 rounded-pill order-2 order-md-1'>
                    <h2 className='text-center'>Md.Mehedi <span className='text-primary'>Hassan</span></h2>
                    <p className='text-muted mt-4'>I am still a student.From the beginning of varsity, I really wanted to be a web developer. I have been trying to learn from many places from the beginning.That continuity is still there. And yet I wish I was a web developer. My future goal is to be a good web developer so I'm doing a lot of work now</p>
                </div>
                <div className='col-12 col-md-4 shadow p-3 rounded-circle order-1 order-md-2'>
                    <img className='img-fluid' src={myPhoto} alt="This is my photos" />
                </div>
            </div>
        </div>
    );
};

export default About;