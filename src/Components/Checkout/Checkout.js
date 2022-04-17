import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import UserHookForm from '../UserHookForm/UserHookForm';





const Checkout = () => {
    const { serviceId } = useParams();
    const [services] = useServices();

    const singleService = services.find(service => service.id === serviceId);
    console.log(singleService);


    return (
        <div className='container mt-3'>
            <div className='row justify-content-center align-items-center'>

                <div className='col-12 col-md-6 '>
                    <h3 className='text-primary text-center my-5'>Check Out Form</h3>
                    <div className='shadow p-4 rounded-3'>
                        <UserHookForm></UserHookForm>
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