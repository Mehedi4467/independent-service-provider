import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';





const Checkout = () => {
    const { serviceId } = useParams();

    const [services] = useServices();
    console.log(services);
    return (
        <div>
            <h1>This is check out page {services.length}</h1>
        </div>
    );
};

export default Checkout;