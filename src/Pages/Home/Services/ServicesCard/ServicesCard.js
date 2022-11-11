import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from "react-icons/fa";

const ServicesCard = ({service}) => {
    const {_id, img, price, title, rating, description} = service;
    return (
        <Col>
            <Card className='border-0 shadow rounded-2'>
            <PhotoProvider>
      <PhotoView src={img}>
      <Card.Img style={{height: "400px", padding:"10px"}} variant="top" src={img} />
      </PhotoView>
    </PhotoProvider>
              
              <Card.Body className='fonts' style={{height: "230px"}}>
                <Card.Title className='fw-semibold'>{title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                  <p>{description.slice(0, 100)+'...'}</p>
                </Card.Text>
                <Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <p><small>Price: {price}</small></p>
                    </div>
                    <div>
                        <p><FaStar className='text-warning me-1'></FaStar>{rating}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                  <Link to={`/services/${_id}`}>
                  <button className='rounded-2' style={{border: "0px", backgroundColor: "white", padding: "7px", border: "2px solid black"}}>View Details</button>
                  </Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default ServicesCard;