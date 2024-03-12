import React, { useContext, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import {  Route } from "react-router-dom";
import Store from './Pages/Store/Store'
import Navigation from "./Components/Navigation/Navigation";
import About from "./Pages/About/About";
import Contact from "./Pages/ContactUs/Contact";
import ProductDetails from "./Pages/productdetails/ProductDetails";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { AuthContext } from "./Components/Context/AuthContext";
import { Redirect } from "react-router-dom";


const App = () => {

  const authctx = useContext(AuthContext)
  const [showCart, setShowCart] = useState(false);

  const cartShowHandler = (event) => {
    event.preventDefault()
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };

  return (
   
    <>

    <main>
      <Navigation cartShowHandler={cartShowHandler} >

        <Route path="/" exact>  <Redirect to="/login" /> </Route>

        <Route path="/store" exact>
          {authctx.isLoggedIn ? (
            <div>
              <Store cartShowHandler={cartShowHandler} />
              {showCart && <Cart cartCloseHandler={cartCloseHandler} />}
            </div>
          ) : ( <Redirect to='/login' /> )}
        </Route>

        <Route path='/store/:productid'>{authctx.isLoggedIn && <ProductDetails />}</Route>

        <Route path="/about" >{authctx.isLoggedIn && <About />}</Route>
        <Route path="/contact">{authctx.isLoggedIn && <Contact />}</Route>
        <Route path="/login"><LoginPage /></Route>

      </Navigation>

    </main>

    </>
  );
};
export default App;