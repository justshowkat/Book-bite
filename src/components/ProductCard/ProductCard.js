import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeContext } from "../Context/Context";
import "./ProductCard.css";

const ProductCard = (param) => {
  const [checkOut, setCheckOut, user, setUser] = useContext(homeContext)
  const { name, image, author, price, id, deleteButton } = param;
  const placeholderImage = 'https://i.ibb.co/1QN1Z41/book-cover.jpg'
  const handleBuyNow = () => {
      setCheckOut([...checkOut, {id, image, name, price, author}])
      
      console.log(id)
  }
  const handleDelete =(id) => {
    console.log(id)
    fetch(`https://tiny-elephant-87232.herokuapp.com/delete/${id}`, {
      method : 'DELETE'
    }).then(res => res.json)
    .then(data => console.log(data, 'deleted successfully'))
    
  }
  return (
    <div>
      <Card style={{ width: "18rem" }} className="book-card">
        <Card.Img variant="top" className='book-cover-image' src={image ? image : placeholderImage} />
        <Card.Body>
          <Card.Title className='custom-card-name'>{name}</Card.Title>
          <p>Author: 
            <strong> {author}</strong>
          </p>
          {deleteButton ? <p>Added By: 
            <strong> {user.displayName || user.email}</strong>
          </p> : ''}
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
            <ListGroupItem className="author-nd-price">
              <h5>${price}</h5>
              { deleteButton ? (
                <Button variant="warning" onClick={() => handleDelete(id)}><FontAwesomeIcon icon={faFolderMinus} /> Delete</Button>
              ) : ( user.emailVerified ? (
                <Button variant="warning" onClick={() => handleBuyNow()}>Buy now</Button>
              ) : (
                <Link className='custom-link' to="/checkout"><Button variant="warning" onClick={() => handleBuyNow()}>Buy now</Button></Link>
              )
              )}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
