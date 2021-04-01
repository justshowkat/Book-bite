import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { homeContext } from "../Context/Context";
import './CheckOut.css'

const CheckOut = () => {
  const [checkOut, setCheckOut] = useContext(homeContext);
  console.log(checkOut.length);
  return (
    <div className="container checkout-container">
      {checkOut.length >= 1 ? (
        <Card className='checkOut-card'>
        <Card.Body>
          <h1>CheckOut</h1>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {checkOut.map(books => <ListGroupItem className='checkout-items'> <p>{books.name}</p><p>${books.price}</p></ListGroupItem>) }
        </ListGroup>
      </Card>
      ) : (
        <h1>Please add some product 1st</h1>
      )}
      
    </div>
  );
};

export default CheckOut;
