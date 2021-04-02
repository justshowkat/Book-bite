import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { name, email, date, orders } = props;
  orders.map(res => console.log(res.name))
  ;

  return (
    <div>
      <Card className="order-card-custom-style" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Ordered By: {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Id: {email}</Card.Subtitle>
          <Card.Text>
            <strong>Order Date:</strong> {date}
          </Card.Text>
          <Card.Title>Ordered Items:</Card.Title>
          <ListGroup variant="flush">
            {orders.map((res) => (
              <ListGroup.Item className='ordered-items-details'> <p><strong>{res.name} :</strong></p> <p>${res.price}</p> </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Footer>
            We deliver our product within 7 days... stay put
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;
