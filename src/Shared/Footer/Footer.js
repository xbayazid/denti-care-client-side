import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='text-center bg-dark' style={{marginTop: "38px"}}>
            <Container className='pt-5'>
                <Row>
                    <Col md={4}>
                    <ul className='footer-link'>
                        <li><Link>Home</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Reviews</Link></li>
                    </ul>
                    </Col>
                    <Col md={4} className="text-center fs-3">
                    <Link className='pe-4 text-white'><FaFacebook /></Link>
                <Link className='pe-4 text-white'><FaInstagram /></Link>
                <Link className='pe-4 text-white'><FaYoutube /></Link>
                    </Col>
                    <Col md={4}>
                    <ul className='footer-link'>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Locations</Link></li>
                        <li><Link>Contacts</Link></li>
                    </ul>
                    </Col>
                </Row>
            </Container>
            <div className='p-5'>
                <p className='text-white'>Copyright © 2022 - All right reserved by DentiCare</p>
            </div>
        </footer>
    );
};

export default Footer;