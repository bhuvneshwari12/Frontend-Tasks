import React, { useContext } from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartButton from './CartButton/CartButton';
import { AuthContext } from '../Context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Navigation = (props) => {
  const authctx=useContext(AuthContext)
  const history=useHistory()

  const handleLogout=()=>{
    authctx.logout();
    history.push('/login')
  }
  return (
    <div className='navigation'>
        <Navbar bg="dark" data-bs-theme="dark"className='navi'>
        <Container>
          <Navbar.Brand href="#home">BeautyBar</Navbar.Brand>
          <Nav className="me-auto">
          {authctx.isLoggedIn && <Nav.Link  as={Link} to="/" href="#home">Home</Nav.Link>}
           {authctx.isLoggedIn && <Nav.Link  as={Link} to="/about" href="#about">About</Nav.Link>}
             {authctx.isLoggedIn && <Nav.Link  as={Link} to="/store"  href="#store">Store</Nav.Link>}
            { authctx.isLoggedIn &&<Nav.Link  as={Link} to="/contact"  href="#contact">Contact</Nav.Link>}
            {!authctx.isLoggedIn && <Nav.Link  as={Link} to="/login"  href="#login">Login</Nav.Link>}
           {authctx.isLoggedIn && <Nav.Link  as={Link} to="/login" onClick={handleLogout}>Logout</Nav.Link>}
          </Nav>

      { authctx.isLoggedIn && <CartButton cartShowHandler={props.cartShowHandler}/>}

        </Container>
      </Navbar>
      {props.children} 
    </div>
  )
}
export default Navigation;