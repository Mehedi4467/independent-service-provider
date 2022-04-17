import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mt-5 container'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;