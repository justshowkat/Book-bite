import React from "react";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeContext } from "../Context/Context";
import './HomeNav.css'

const HomeNav = () => {
  const [checkOut, setCheckOut, user, setUser] =  useContext(homeContext)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand>
            <Link className='custom-link' to="/">Book Bite</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link ><Link className='custom-link' to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/orders">Orders</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/admin">Admin</Link></Nav.Link>
              {checkOut.length >= 1 ? <Nav.Link ><Link className='custom-link' to="/checkout">Check Out</Link></Nav.Link> : ''}
              { user.emailVerified ? <Nav.Link ><Link className='custom-link' to="/admin"> <img src={user.photoURL} alt="navbar avatar" srcset="" className='navbar-avatar'/> {user.displayName}</Link></Nav.Link> :  <Link className='custom-link' to="/login"><Button variant="outline-warning">Login</Button></Link>}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeNav;
