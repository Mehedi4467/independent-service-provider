import React from 'react';
import './Banner.css';
import bannerBg from '../../../images/banner-bg.jpg';
import banner from '../../../images/banner.png';


var sectionStyle = {
    width: '100%',
    minHeight: "600px",
    backgroundImage: "url(" + (bannerBg) + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
};

const Banner = () => {
    return (

        <div className='banner-body' style={sectionStyle}>
            <div className='banner-item  d-flex align-items-center'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className='text-white d-none d-md-block'>
                    <h2>Hi <br></br> <span className=' name'>I am Will Jhone</span> </h2>
                    <p>body building Trainer</p>
                    <div className='d-flex mt-4 w-50 justify-content-between social-icon'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;