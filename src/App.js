import React, { Fragment, useState } from "react"
import Header from "./Components/Layout/Header"
import Meals from "./Components/Meals/Meals"
import './App.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cart from "./Components/Card/Cart"


const App = () => {

  const[cartShow,setCartShow]=useState(false);

  const cartShowHandler=()=>{
    setCartShow(true)
  }
  const cartCloseHandler=()=>{
    setCartShow(false)
  }

  return (
    <Fragment>
               { cartShow  && <Cart cartCloseHandler={cartCloseHandler}/>}
               <Header cartShowHandler={cartShowHandler}/>
           <main>
                  <Meals/>
           </main>
    </Fragment>
  )
}

export default App;