import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row} from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const service  = useLoaderData();
    const {_id, img, price, title, rating, description} = service;
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
      fetch('https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
    },[]);

    const reverseReview = [...reviews].reverse()
    const sliceReview = reverseReview.slice(0,4);
    return (
        <div className='my-5'>
            <div className='w-50 mx-auto fonts my-5 shadow-lg p-3 mb-5 bg-body rounded' style={{textAlign: 'justify'}}>
            <CardGroup>
      <Card className='border-0'>
        <Card.Img className='img-fluid w-75 mx-auto' variant="top" src={img} />
        <Card.Body>
          <Card.Title className='fw-bold'>{title}</Card.Title>
          <Card.Text>
            {description}
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
                </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
        <div>
           <Container>
            <div className='text-center fonts my-5'>
              <h4 style={{color: "crimson"}}>TESTIMONIALS</h4>
              <h1 style={{fontSize: "50px"}}>What Clients Say</h1>
              <hr className='mx-auto text-danger' style={{width: "30%"}} />
            </div>
           <Row xs={1} md={2} className="g-4">
            {
                sliceReview.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }
            </Row>
           </Container>
        </div>
        <div className='text-center mt-5 fonts'>
            <Link to='/reviews'>
            <button style={{backgroundColor: "black", padding: "10px 20px"}} className='border-0 text-white rounded'>Add Review</button>
            </Link>
            <Link to='/addService'>
            <button style={{backgroundColor: "black", padding: "10px 20px"}} className='ms-3 border-0 text-white rounded'>Add Service</button>
            </Link>
        </div>
        </div>
    );
};

export default ServiceDetails;