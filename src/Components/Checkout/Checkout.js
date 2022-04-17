import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1>This is check out page {serviceId}</h1>
        </div>
    );
};

export default Checkout;