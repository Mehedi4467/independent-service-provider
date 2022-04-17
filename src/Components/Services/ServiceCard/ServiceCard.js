import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, image, name, price } = service;
    const navigate = useNavigate();
    const navigateToService = (id) => {
        navigate(`/services/${id}`);
    }
    return (
        <div className='col'>
            <div className="card h-100 shadow">
                <img src={image} className="card-img-top img-fluid rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p style={{ fontSize: '20px' }}>Price :<span style={{ color: 'orange', fontSize: '20px' }}> ${price}</span> </p>
                    <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="mt-3">
                    <button onClick={() => navigateToService(id)} className='w-100 btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;