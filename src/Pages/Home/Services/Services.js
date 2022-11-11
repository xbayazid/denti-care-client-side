import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import './Services.css';
import ServicesCard from './ServicesCard/ServicesCard';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const reverseService = [...services].reverse();
    console.log(reverseService)


    const sliceService = reverseService.slice(0, 3)
    return (
        <div className='my-5'>
            <Container>
                <div className='w-50 mb-5 fonts text-center mx-auto'>
                    <h1>Healthy Smiles</h1>
                    <h1 className='services-title fw-bold' style={{fontSize: '78px'}}>Everyday!</h1>
                    <p className='fs-5'>Get your day started with a smile: check our services to see what we can help you with!</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        sliceService.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        ></ServicesCard>)
                    }
                </Row>
                <div className='mt-5 text-center'>
                <Link to='/services'>
                <button className='service-btn fonts rounded'>Full List Of Services</button>
                </Link>
                </div>
            </Container>
        </div>
    );
};

export default Services;