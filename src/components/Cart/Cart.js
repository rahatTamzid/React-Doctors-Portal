import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total =0;
    const duplicateItemsArray = [...cart]; //copy confirmed doctors object into an array
    const names = []; // declaring blank array to store names
    const uniqueArray = [...new Set(duplicateItemsArray)] //filtering out duplicate data
    uniqueArray.map(doctor=>{
        names.push(doctor.name, ' ,'); //pushing Confirmed doctors name
    })
    for(const doctor of uniqueArray){
total = total + doctor.fee;  // calculating fee

    }
    return (
        <div>
        <h3>Appoinment History</h3>
        <h5>Total  {uniqueArray.length} Doctor's Appoinment </h5>
        <h5>Total Consulting Fee  {total} </h5>
        <br/>
        <h4>Confirmed Doctors: {names}</h4>
        {
            
        }
        
        </div>
    );
};

export default Cart;