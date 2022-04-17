import React from 'react';

const Spinner = () => {
    return (
        <div className='d-flex p-3 justify-content-center w-100 container'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;