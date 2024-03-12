import React, { useContext, useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginPage.css'; // Import CSS file
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContext';

const LoginPage = () => {
  const [isLogin,setIsLogin]=useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const authctx=useContext(AuthContext)
  const history=useHistory()
  let emailRef=useRef();
  let passwordRef=useRef();

  const handleToggle=()=>{
    setIsLogin(!isLogin)
  }

const submitHandler=(event)=>{
  event.preventDefault();
  const enteredEmail=emailRef.current.value;
  const enteredPassword=passwordRef.current.value;

  setIsLoading(true)
  let url;
  if (isLogin)
  {
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXnYnPZvWmQikMTjFhQ4x2VjbehYit0xo'
  }
  else
  {
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXnYnPZvWmQikMTjFhQ4x2VjbehYit0xo'
  }
  fetch(url, 
  {
    method: 'POST',
    body: JSON.stringify({ email: enteredEmail, password: enteredPassword, returnSecureToken: true }),
    headers: { 'Content-Type': 'application/json' }
  })
    
  .then(res => {
      if (res.ok) 
      { 
        setIsLoading(false)
        return res.json();
      } 
      else
      { 
        setIsLoading(false);
        return  res.json().then(data=>{ 
          throw new Error("Authentication Failed") 
        })  
            
      }
    })

    .then(data=> {
      console.log(data) 
      authctx.login(data.idToken,data.email)
      history.push('/store')
    })
    .catch(err=> {alert(err);  })

};
  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <div className="login-form-container">
              <h2 >🅱🅴🅰🆄🆃🆈🅱🅰🆁</h2>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  ref={emailRef}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                </Form.Group>

                {!isLoading &&  <Button variant="secondary" type="submit"> {isLogin? 'Login' :'signup'} </Button>}
                {isLoading &&  <Button variant="secondary" type="submit"> sending request... </Button>}
               
                <button type='button' className='toggle' onClick={handleToggle}> {isLogin ? 'Create new account' : 'Login with existing account'}</button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }

export default LoginPage;



