import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctorImg from '../../../assests/doctorIntro/doctor-intro.png';
import './DoctorIntro.css';
import { Link } from 'react-router-dom';

const DoctorIntro = () => {
    return (
        <div className='my-5 doctor-banner'>
            <Container>
                <Row>
                    <Col md={6}>
                    <div className='m-auto md:w-50 fonts p-5'>
                    <h1 className='doctor-title'>We Can Help You Have A <br /><span className='text-light title-font'>Natural Smile</span></h1>
                    <div className='w-25 text-white'>
                    <hr/>
                    </div>
                       <p className='text-white fs-5 doctor-details fonts md:w-50'>"We at DentiCare are focused on helping you. Dynamically reinvent market-driven opportunities and interfaces. Efficiently innovate open-source materials."</p>
                       <div className='w-25 text-white'>
                    <hr />
                    </div>
                       <h5 className='text-light fst-italic'>Everest Whiting</h5>
                       <p className='text-light'><small>Clinic Director</small></p>
                    </div> 
                    </Col>
                    <Col md={6} className="pt-3"> 
                    <img src={doctorImg} alt="" />
                    </Col>
                </Row>
{/*                 
                <div className='d-flex'>
                    <div className='m-auto md:w-50 fonts'>
                    <h1 className='doctor-title'>We Can Help You Have A <br /><span className='text-light title-font'>Natural Smile</span></h1>
                    <div className='w-25 text-white'>
                    <hr/>
                    </div>
                       <p className='text-white fs-5 doctor-details fonts w-50'>"We at DentiCare are focused on helping you. Dynamically reinvent market-driven opportunities and interfaces. Efficiently innovate open-source materials."</p>
                       <div className='w-25 text-white'>
                    <hr />
                    </div>
                       <h5 className='text-light fst-italic'>Everest Whiting</h5>
                       <p className='text-light'><small>Clinic Director</small></p>
                    </div>
                    <div>
                    <img src={doctorImg} alt="" />
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default DoctorIntro;