import { faEdit, faPlusSquare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";
import React from "react";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeContext } from "../Context/Context";
import './AdminNav.css'

const AdminNav = () => {
    const [checkOut, setCheckOut, user, setUser] = useContext(homeContext)
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
              <Nav.Link ><Link className='custom-link' to="/manage-product"><FontAwesomeIcon icon={faThLarge} /> Manage Product</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/edit-product"><FontAwesomeIcon icon={faEdit} /> Edit Product</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/add-product"><FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link></Nav.Link>
              { user.emailVerified ? <Nav.Link ><Link className='custom-link' to="/admin"> <img src={user.photoURL} alt="navbar avatar" srcset="" className='navbar-avatar'/> {user.displayName}</Link></Nav.Link> :  <Link className='custom-link' to="/login"><Button variant="outline-warning">Login</Button></Link>}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AdminNav;
