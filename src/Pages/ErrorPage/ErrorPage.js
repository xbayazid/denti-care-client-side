import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assests/error/error.gif'

const ErrorPage = () => {
    return (
        <div>
           <div className='d-flex justify-content-center'>
            <img className='img-fluid' src={errorImg} alt="" />
            </div> 
           <div className='text-center'>
            <Link to='/'>
            <button className='banner-btn fonts fw-semibold'>Back to Home Page</button>
            </Link>
           </div>
        </div>
    );
};

export default ErrorPage;