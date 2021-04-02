import React, { useContext, useEffect, useState } from 'react';
import { homeContext } from '../Context/Context';
import ProductCard from '../ProductCard/ProductCard';
import './ManageProduct.css'

const ManageProduct = () => {
    const [userBooks, setUserBooks] = useState([])
    const [checkOut, setCheckOut, user, setUser] = useContext(homeContext)
    useEffect(() => {
        fetch('http://localhost:5050/userProducts?email='+user.email)
        .then(res => res.json())
        .then(data => {
          setUserBooks(data)
        })
      }, [])
    return (
        <div className='manage-products'>
            {userBooks.map(book => <ProductCard key={book._id} id={book._id} image={book.image} name={book.bookName} author={book.author} price={book.price} deleteButton='true'> </ProductCard>) }
        </div>
    );
};

export default ManageProduct;