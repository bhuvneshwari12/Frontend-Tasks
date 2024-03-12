import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Import custom CSS for styling

const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [message,setMesaage]=useState('')

  async function submitHandler(event){
    event.preventDefault();
  
    const obj={id :Date.now(),name,email,phoneNumber,message}
    console.log(obj)

    try{
      const response=await fetch ('https://beautybar-9a3f9-default-rtdb.firebaseio.com/beautyBar.json',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{'Content-Type': 'application/json'}
      })
      if (!response){ throw new Error('failed to load data')}

    }catch(error){
      console.log(error)}
      setName(' ')
  }
  return (
    <div className="contact-us">
      <div className="bg-image"></div> {/* Background image */}
      <Container>
        <Row>
          <Col md={6}>
            <h2 className='headings'>Contact Us</h2>
            <p className='headings'>We'd love to hear from you!</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label style={{color:'white'}}  >Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label  style={{color:'white'}} >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"  onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label  style={{color:'white'}} >Phone number</Form.Label>
                <Form.Control type='number' placeholder="Enter contact number" onChange={(e)=>{setPhoneNumber(e.target.value)}} />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label  style={{color:'white'}}>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message"  onChange={(e)=>{setMesaage(e.target.value)}}/>
              </Form.Group>

              <Button variant="dark" type="submit" onClick={submitHandler}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>123-456-7890</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>info@beautyBar.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faHandshake} className="icon" />
              <span>Let's connect!</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="cartoons-container">
            <div className="running-icon">
              <FontAwesomeIcon icon={faHandshake} size="4x" />
            </div>
            {/* Add more running icons or cartoons as needed */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;