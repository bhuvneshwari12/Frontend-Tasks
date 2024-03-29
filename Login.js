import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer=(state,action)=>{
  if (action.type==='USER_INPUT')
  {
    return {value:action.val,isValid: action.val.includes("@")}
  }
  if (action.type==='INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.includes("@")}
  }
  return ( {value : " " , isValid : false} ) 
}
const passwordReducer=(state,action)=>{
  if (action.type==='USER_INPUT')
  {
    return {value:action.val,isValid: action.val.includes("@")}
  }
  if (action.type==='INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.includes("@")}
  }
  return ( {value : " " , isValid : false} ) 
}

const Login = (props) => {
  
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispathEmail]=useReducer(emailReducer, {value:" " ,isValid:false})
  const [passwordState,dispathPassword]=useReducer(passwordReducer, {value:" " ,isValid:false})

  const emailChangeHandler = (event) => {
    dispathEmail( {type: 'USER_INPUT' ,val: event.target.value })

    setFormIsValid(
      emailState.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispathPassword( {type: 'USER_INPUT' ,val: event.target.value })

    setFormIsValid(
      emailState.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispathEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispathPassword({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${  emailState.isValid === false ? classes.invalid : ''  }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
