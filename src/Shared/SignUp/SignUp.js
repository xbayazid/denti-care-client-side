import React, { useContext, useState } from "react";
import {GoogleAuthProvider} from 'firebase/auth'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import signUp from "../../assests/signup/signup.gif";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  useTitle('Sign Up');
  const [error, setError] = useState('')
  const {providerLogin} = useContext(AuthContext);
  const {createUser} = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();


  const handleGoogleSignIn = () =>{
    providerLogin(googleAuthProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
        setError(error.message);
    })
}

const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name, email, password)

  createUser(name, email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            form.reset();
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })

}

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <img className="w-100" src={signUp} alt="" />
          </Col>
          <Col md={6} className="p-5 rounded-3 mb-4 fonts">
            <h2 className='mb-4 fst-italic'>Please Sign Up</h2>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='name' type="text" placeholder="Full Name"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='email' type="email" placeholder="Enter Email"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-danger">
      {error}
        </Form.Text>
      </Form.Group>
      <div>
                <p>Already have an account? <Link to='/signin' className="text-primary" style={{textDecoration: "none"}}>Sign In</Link></p>
              </div>
      <button className="rounded" style={{border: '0px', padding: "10px 20px", backgroundColor: "lightPink"}} type="submit">Sign Up</button>
    </Form>
            <div className="text-center mt-4">
                <p>--------- OR ---------</p>
                <button onClick={handleGoogleSignIn} style={{backgroundColor: "black"}} className="px-5 py-2 border-0 rounded text-white"><FaGoogle></FaGoogle> Sign Up With Google</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
