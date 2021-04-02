
import React, { useContext } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeContext } from "../Context/Context";
import './CheckOut.css'

const CheckOut = () => {
  const [checkOut, setCheckOut, user, setUser] = useContext(homeContext);
  const currentDate = Date().toString()
  const handleOrder = () => {
    const orderInfo = checkOut.map(data => ({
      name: data.name,
      price: data.price,
      id: data.id
    }))
    
    const orderDetails = {
      name: user.displayName,
      email: user.email,
      orderInfo: orderInfo,
      date: currentDate
    }
    orderDetails.orderInfo.map(data => console.log(data[0]))
    
    fetch("https://tiny-elephant-87232.herokuapp.com/addOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      }).then(() => setCheckOut([]));

  }
  
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
        <Card.Body>
        <Link className='custom-link' to="/orders"><Button variant='warning' onClick={handleOrder}>Order this books</Button></Link>
        </Card.Body>
      </Card>
      ) : (
        <h1>Please add some product 1st</h1>
      )}
      
    </div>
  );
};

export default CheckOut;
