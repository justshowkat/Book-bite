import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./AddProduct.css";

const AddProduct = () => {
  let bookName = "";
  const [coverImage, setCoverImage] = useState("");
  const [formValue, setFormValue] = useState({
    image: "",
    bookName: "",
    author: "",
    price: "",
  });

  const handleSubmit = (event) => {
    const bookName = document.getElementById("book-name").value;
    const authorName = document.getElementById("author-name").value;
    const price = document.getElementById("price").value;
    console.log(bookName, authorName, price, coverImage);
    setFormValue({
      image: coverImage,
      bookName: bookName,
      author: authorName,
      price: price,
    });
    event.preventDefault();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "66c71e0477f01e070f4623dfde104b99");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setCoverImage(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-product-container">
      <form className="add-product-form">
        
        <label for="fname">Book name:</label> <br />
        <input
          className="custom-input-form"
          type="text"
          id="book-name"
          placeholder="book name"
        />
        <br />
        <label for="lname">Author name:</label>
        <br />
        <input
          className="custom-input-form"
          type="text"
          id="author-name"
          placeholder="author"
        />
        <br />
        <label for="lname">price:</label>
        <br />
        <input
          className="custom-input-form"
          type="text"
          id="price"
          placeholder="price"
        />
        <br />
        <div className="form-footer">
        <div className="form-img-section">
        <label for="fname">Book Cover:</label> <br />
        <input
          
          type="file"
          id="book-cover"
          onChange={handleImageUpload}
        />
        </div>
        
        <Button type="submit" variant="warning" onClick={handleSubmit}>
          Submit
        </Button>
        </div>
      </form>
      <div className="form-view">
       {formValue.author ? <ProductCard image={formValue.image} name={formValue.bookName} author={formValue.author} price={formValue.price} > </ProductCard> : ''}
      </div>
    </div>
  );
};

export default AddProduct;
