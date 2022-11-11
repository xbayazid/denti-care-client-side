import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bannerImg from '../../../assests/banner/banner.png';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-bg fonts'>
            <Container>
                <Row>
                    <Col md={6} className="mt-3">
                    <img src={bannerImg} alt="" />
                    </Col>
                    <Col className='mt-5 ps-5' md={6}>
                       <div>
                        <h1 style={{fontSize: "4rem"}}>Time To</h1>
                        <h1 className='text-light fw-bold' style={{fontSize: "8rem"}}>Smile!</h1>
                       </div>
                       <p className='fs-5'>Enjoy our new dental offers and travel destinations, they’re online immediately. Choose your service or destination and start smiling again!</p>
                       <Link><button className='banner-btn fw-semibold rounded-2 mb-3'>Start Your Dental Travel</button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;