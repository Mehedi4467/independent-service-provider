
import useServices from '../../hooks/useServices';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setService] = useServices();


    return (
        <div>
            <h2 className='text-center text-primary mt-5 pt-5'>My Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;