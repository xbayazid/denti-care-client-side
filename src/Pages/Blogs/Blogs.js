import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
  useTitle('Blogs')
    return (
        <div className='fonts md:w-50 mx-auto' style={{marginTop: '150px', marginBottom:"120px"}}>
           <Container>
           <h1 style={{color: "#FDABB7"}} className='my-5 fw-bold'>Our Blogs</h1>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
        <Accordion.Body>
        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is JWT and how does it works?</Accordion.Header>
        <Accordion.Body>
        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is difference between Javascript and nodeJS?</Accordion.Header>
        <Accordion.Body>
          <p><span className='text-danger'>JavaScript </span>is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance</p>
          <p><span className='text-danger'>NodeJS </span>is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does Node JS handle multiple request at the same time?</Accordion.Header>
        <Accordion.Body>
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
           </Container>
        </div>
    );
};

export default Blogs;