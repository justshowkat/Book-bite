import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { homeContext } from "../Context/Context";
import ProductCard from "../ProductCard/ProductCard";
import "./AddProduct.css";

const AddProduct = () => {
  const [checkOut, setCheckOut, user, setUser] = useContext(homeContext);
  let coverImage;
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
    const formValues = {
      image: coverImage,
      bookName: bookName,
      author: authorName,
      price: price,
      admin: user.email,
    };
    setFormValue(formValues);
    if (
      formValues.bookName &&
      formValues.author &&
      formValues.price &&
      formValues.admin
    ) {
      fetch("http://localhost:5050/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => console.log(res));
    } else {
      alert('pls fill all the form before submitting it')
    }

    event.preventDefault();
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66c71e0477f01e070f4623dfde104b99");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        coverImage = res.data.data.display_url;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form">
        <label for="fname">Book Cover:</label> <br />
        <input type="file" id="book-cover" onChange={handleImageUpload} />
        <br />
        <label for="fname">Book name:</label> <br />
        <input
          className="custom-input-form"
          type="text"
          id="book-name"
          placeholder=" book name"
        />
        <br />
        <label for="lname">Author name:</label>
        <br />
        <input
          className="custom-input-form"
          type="text"
          id="author-name"
          placeholder=" author"
        />
        <br />
        <label for="lname">price:</label>
        <br />
        <input
          className="custom-input-form"
          type="text"
          id="price"
          placeholder=" price"
        />
        <br />
        <div className="form-footer">
          <Button
            type="submit"
            variant="warning"
            className="add-product-button"
            onClick={handleSubmit}
          >
            Add New Book
          </Button>
        </div>
      </form>
      <div className="form-view">
        {formValue.bookName ? (
          <ProductCard
            image={formValue.image}
            name={formValue.bookName}
            author={formValue.author}
            price={formValue.price}
          >
            {" "}
          </ProductCard>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddProduct;
