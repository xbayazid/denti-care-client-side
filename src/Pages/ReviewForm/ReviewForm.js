import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import fulImg from '../../assests/review/review.gif'

const ReviewForm = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const name = displayName;
  const image = photoURL;
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const reviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewDescription = form.comment.value;
    const rating = form.rating.value;
    const review = {image, name, reviewDescription, rating};
    console.log(image, name, reviewDescription, rating)
    fetch("https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        const newReview = [...reviews, data];
        setReviews(newReview);
      })
      .catch((error) => console.error(error));

      handleShow();
      form.reset();
  };
  return (
    <div>
      <Container className="my-5 fonts">
        <h1
          className="fst-italic fw-bold"
          style={{ color: "#FDABB7", fontSize: "40px", marginBottom: "40px" }}
        >
          Add your review
        </h1>
        <Form onSubmit={reviewSubmit} className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control as="textarea" style={{ height: '100px' }} name="comment"  type="text" placeholder="Your comment" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="rating" type="text" placeholder="Ratings (Example 4.5 out of 5)" required/>
      </Form.Group>
      <Button style={{ backgroundColor: "black", padding: "10px 20px" }}
                className="border-0 text-white rounded" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className="w-100" src={fulImg} alt="" />
        </Modal.Body>
        <p className="text-center text-success">Successfully review added</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
};

export default ReviewForm;
