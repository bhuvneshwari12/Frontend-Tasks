import React, { useContext } from 'react'
import './ExpenseTracker.css'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Store/AuthContext'


const ExpenseTracker = () => {
  const authctx=useContext(AuthContext);
  const history = useHistory()

  const emailVerification=()=>{
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDXnYnPZvWmQikMTjFhQ4x2VjbehYit0xo',{
      method: 'POST',
      body:JSON.stringify({requestType:'VERIFY_EMAIL',idToken:authctx.token}),
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      alert('An email verification link has been sent to your email address.')
    } )
    .catch(error => alert(error));
  }


  const handleProfile = () => {
    history.push('/completeprofile')
  }
  return (
    <>
      <h2 className='user' > Welcome To ExpenseTracker!</h2>

      <div className='profile'>
           <h2 className='completee'>Your user profile is incomplete.</h2>
           <button className='complete' onClick={handleProfile}>complete now</button>
      </div>

      <div className='fiv'>
           <button type='button' className='verify' onClick={emailVerification} >Verify Email</button>
      </div>
    </>
  )
}

export default ExpenseTracker;
