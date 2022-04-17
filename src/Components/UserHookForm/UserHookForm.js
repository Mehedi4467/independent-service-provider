import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} className="form-control mb-4" />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="form-control mb-4" />
                <input type="tel" placeholder="Mobile Number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} className="form-control mb-4" />
                <input type="text" placeholder="Address" {...register("Address", { required: true, maxLength: 81 })} className="form-control mb-4" />

            </div>

            <input className='btn btn-primary w-100' type="submit" value="Check Out" />
        </form>
    );
}