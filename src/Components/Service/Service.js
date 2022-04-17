import React from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Single service {serviceId}</h1>
        </div>
    );
};

export default Service;