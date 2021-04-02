import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = () => {

  const [Books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://glacial-hamlet-33411.herokuapp.com/allProducts')
    .then(res => res.json())
    .then(data => {
      setBooks(data)
      console.log(data)
    })
  }, []);
  return (
    <div>
      <div className="search-area">
        <Form inline className="home-search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" className='search-button'>Search</Button>
        </Form>
      </div>
      {!Books.length && <div className="custom-loader"><CircularProgress color="secondary" /></div> }
      <div className="home-container container">
      { Books.map(book => <ProductCard key={book._id} id={book._id} image={book.image} name={book.bookName} author={book.author} price={book.price} > </ProductCard>)}
      </div>
     
    </div>
  );
};

export default Home;
