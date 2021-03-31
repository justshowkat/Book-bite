import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = (param) => {
  const [checkOut, setCheckOut] = useState([{}])
  const { name, image, author, price } = param;
  const handleBuyNow = () => {
      const temp = {name, price, author}
      setCheckOut(...checkOut, temp)
      console.log(checkOut)
  }
  return (
    <div>
      <Card style={{ width: "18rem" }} className="book-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className='custom-card-name'>{name}</Card.Title>
          <p>Author: 
            <strong> {author}</strong>
          </p>
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
            <ListGroupItem className="author-nd-price">
              <h5>${price}</h5>
              <Button variant="warning" onClick={() => handleBuyNow()}>Buy now</Button>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
