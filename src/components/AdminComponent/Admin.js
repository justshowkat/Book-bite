import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { homeContext } from "../Context/Context";
import "./Admin.css";

const Admin = () => {
  const [checkOut, setCheckOut, user, setUser] = useContext(homeContext);
  return (
    <div className="admin-area">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.photoURL} />
        <Card.Body>
          <Card.Title>User Name: {user.displayName} </Card.Title>
          <Card.Text>Email: {user.email} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Admin;
