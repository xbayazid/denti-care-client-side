import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import useTitle from '../../../../hooks/useTitle';

const Review = ({review}) => {
    const {id, name, image, reviewDescription, rating} = review;
    useTitle('Service-Details')
    return (
        <div>
            <div>
            <Col>
          <Card className='fonts p-5 shadow review-card border-0'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='w-50 ps-3'>
                    <img style={{borderRadius: "50%", width: "60px", height: "80px"}} className='img-flud' src={image} alt="" />
                    <Card.Title className='fw-semibold mt-1'>{name}</Card.Title>
                </div>
                <div>
                <Card.Body>
              <Card.Text>
                <p>{reviewDescription}</p>
              </Card.Text>
              <div className='d-flex justify-content-end align-items center'>
              <p><FaStar className='text-warning me-1'></FaStar>{rating}</p>
              </div>
            </Card.Body>
                </div>
            </div>
          </Card>
        </Col>
            </div>
        </div>
    );
};

export default Review;