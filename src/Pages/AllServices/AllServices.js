import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthProvider from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServicesCard from '../Home/Services/ServicesCard/ServicesCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    // const {loader} = useContext(AuthProvider)
    useTitle('Services')
    useEffect(() =>{
        fetch('https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    });
    
    const reverseService = [...services].reverse();
    const allServices = reverseService
    return (
        <div>
            <div>
              <Container>
              <Row xs={1} md={3} className="g-4 mb-5">
                    {
                        allServices.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        ></ServicesCard>)
                    }
                </Row>
                </Container>  
            </div>
        </div>
    );
};

export default AllServices;