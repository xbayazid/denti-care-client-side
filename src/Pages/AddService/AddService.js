import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import serviceImg from '../../assests/services/services.gif'

const AddService = () => {
  useTitle('Add Services')

  const [services, setServices] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
    fetch('https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[]);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.details.value;
    // const importImg = form.importImg.value;
    // console.log(importImg)
    const service = {title, img, price, rating, description};

    fetch("https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        const newService = [...services, data];
        setServices(newService);
      })
      .catch((error) => console.error(error));
      handleShow();
      form.reset();
  }
  return (
    <div>
      <Container className="fonts">
        <h1
          className="fst-italic fw-bold"
          style={{ color: "#FDABB7", fontSize: "40px", marginBottom: "40px" }}
        >
          Add Services
        </h1>
        <div className="my-5 w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="title" type="text" placeholder="Service title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="img" type="file" placeholder="Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="price" type="text" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="rating" type="text" placeholder="Rating" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control as="textarea" style={{ height: '80px' }} name="details" type="text" placeholder="Service Description" />
      </Form.Group>
      {/* <div>
        <input name="importImg" type="file" />
      </div> */}
      <button
                style={{ backgroundColor: "black", padding: "10px 20px" }}
                className="border-0 text-white rounded"
             type="submit" >
                Submit
              </button>
    </Form>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className="w-100" src={serviceImg} alt="" />
        </Modal.Body>
        <p className="text-center text-success">Successfully service added</p>
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

export default AddService;
