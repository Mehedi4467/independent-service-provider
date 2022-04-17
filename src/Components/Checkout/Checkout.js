import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import { useForm } from 'react-hook-form';
import { useState } from 'react';





const Checkout = () => {
    const { serviceId } = useParams();
    const [services] = useServices();

    const singleService = services.find(service => service.id === serviceId);

    const { register } = useForm();
    const [confirmation, setConfirmation] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setConfirmation("Thank you for the booking.");
    }
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center align-items-center'>
                <h1 className='text-center text-primary'>{confirmation}</h1>
                <div className='col-12 col-md-6 '>
                    <h3 className='text-primary text-center my-5'>Check Out Form</h3>
                    <div className='shadow p-4 rounded-3'>
                        <form onSubmit={handleSubmit}>
                            <div className=''>
                                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} className="form-control mb-4" required />
                                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="form-control mb-4" required />
                                <input type="tel" placeholder="Mobile Number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} className="form-control mb-4" required />
                                <input type="text" placeholder="Address" {...register("Address", { required: true, maxLength: 81 })} className="form-control mb-4" required />

                            </div>

                            <input className='btn btn-primary w-100' type="submit" value="Booking" />
                        </form>
                    </div>
                </div>
                <div className='col-12 col-md-5 ms-auto'>

                    <div className='shadow rounded-3 p-4 mt-3'>
                        <img className='img-fluid shadow rounded-3 ms-auto' src={singleService?.image} alt={singleService?.name} />
                        <p style={{ fontSize: '15px', color: 'orange' }} className='shadow rounded-pill p-3 mt-2 text-center'>Price : ${singleService?.price}</p>
                        <p className='shadow rounded-3 p-3 text-muted'>{singleService?.discription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;