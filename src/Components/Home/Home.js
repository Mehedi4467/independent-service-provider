import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='container'><Services></Services></div>
        </div>
    );
};

export default Home;