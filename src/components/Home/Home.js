import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const temoraryBooks = [
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "thus spoke zarathusra",
      author: "Nietzsche",
      price: "230",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "A History of Western Philosophy ",
      author: "Bertrand Russell",
      price: "350",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "Sophie’s World ",
      author: "Jostein Gaarder",
      price: "250",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "Man’s Search for Meaning",
      author: "Viktor Frankl",
      price: "200",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "The Dialogues",
      author: "Plato",
      price: "320",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "The Essential Epicurus",
      author: "Epicurus",
      price: "699",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "Critique of Pure Reason",
      author: "Emmanuel Kant",
      price: "369",
    },
    {
      image: "https://i.ibb.co/q1T6Yw5/thus-spoke-jarathusra.jpg",
      name: "Beyond Good And Evil",
      author: "Nietzsche",
      price: "369",
    },
  ];

  const [Books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(temoraryBooks);
  }, []);
  return (
    <div>
    {!Books.length && <CircularProgress className='custom-loader' color="secondary" />}
      <div className="search-area">
        <Form inline className="home-search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>

      <div className="home-container container">
      { Books.map(book => <ProductCard image={book.image} name={book.name} author={book.author} price={book.price} > </ProductCard>)}
      </div>
     
    </div>
  );
};

export default Home;
