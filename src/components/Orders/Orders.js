import React, { useContext, useEffect, useState } from 'react';
import { homeContext } from '../Context/Context';
import OrderCard from '../OrderCard/OrderCard';
import './Orders.css'

const Orders = () => {
    const [userOrder, setUserOrder] = useState([])
    const [checkOut, setCheckOut, user, setUser] = useContext(homeContext)
        useEffect(() => {
            fetch('https://tiny-elephant-87232.herokuapp.com/orderdProducts?email='+user.email)
            .then(res => res.json())
            .then(data => {
                setUserOrder(data)
            })
          }, [])
          const test = userOrder.map(data => data.orderInfo[0].name)
        //   const testResult = test.map(data => data.map(res => res))
          console.log(test)
          
    return (
        <div className='order-container'>
            {userOrder.length ? (userOrder.map(data => <OrderCard key={data._id} name={data.name} email={data.email} date={data.date} orders={data.orderInfo} ></OrderCard>)) : <h5>go to checkout page to confirm your order</h5> }
            
        </div>
    );
};

export default Orders;