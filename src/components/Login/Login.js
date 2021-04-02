import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { firebaseConfig } from "./FirebaseConfig";
import { useContext } from "react";
import { homeContext } from "../Context/Context";
import { useHistory, useLocation } from "react-router";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
 }else {
    firebase.app();
 }

const Login = () => {
  const [checkOut, setCheckOut, user, setUser] =  useContext(homeContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const logedInUser = result.user;
        setUser(logedInUser)
        logedInUser.emailVerified && history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <div className="google-sign">
        <h5>you better use this option, cause login form is just for show!!</h5>
        <Button
          variant="warning"
          type="button"
          className="google-signIn-button"
          onClick={handleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} /> SignUp with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
