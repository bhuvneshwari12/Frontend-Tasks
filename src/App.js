import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( ()=>{
    const storedUserLoggedInInfromation=localStorage.getItem('isLggedIn')
    if (storedUserLoggedInInfromation==='1')
    {
      setIsLoggedIn(true)
    } } ,[ ] ) 
 

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn','1')


  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn','1')
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;