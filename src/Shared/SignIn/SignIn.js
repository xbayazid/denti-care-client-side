import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {GoogleAuthProvider} from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signInImage from '../../assests/signin/signin.gif'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignIn = () => {
  useTitle('Sign In')
  const [error, setError] = useState('');
  const {signIn, loader} = useContext(AuthContext);
  const {providerLogin} = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () =>{
    providerLogin(googleAuthProvider)
    .then(result =>{
      const user = result.user;
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.event.value;
    const password = form.password.value;
    signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);

            const currentUser ={
              email: user.email
            }

            console.log(currentUser);

            //get jwt token
            fetch('https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/jwt',{
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data);
              // local Storage is the easiest but not the best place to store jwt token
              localStorage.setItem('token', data.token);

            })

            form.reset();
            setError('');
            navigate(from, {replace: true});
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
            <img className='w-75 mb-5' src={signInImage} alt="" />
          </Col>
          <Col md={6} className="p-5 rounded-3 mb-4 fonts">
            <h2 className='mb-4 fst-italic'>Please Sign In</h2>
            <Form onSubmit={handleSubmit}>
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
                <p>New to DentiCare? <Link to='/signup' className="text-primary" style={{textDecoration: "none"}}>Sign Up</Link></p>
              </div>
      <button className="rounded" style={{border: '0px', padding: "10px 20px", backgroundColor: "lightPink"}} type="submit">Sign In</button>
    </Form>
            <div className="text-center mt-4">
                <p>--------- OR ---------</p>
                <button onClick={handleGoogleSignIn} style={{backgroundColor: "black"}} className="px-5 py-2 border-0 rounded text-white"><FaGoogle></FaGoogle> SIGN IN WITH GOOGLE</button>
            </div>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default SignIn;