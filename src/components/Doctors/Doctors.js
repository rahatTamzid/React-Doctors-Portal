import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import DoctorsCart from "../DoctorsCart/DoctorsCart";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]); //declaring state for load doctors data
  const [cart, setCart] = useState([]); //declaring state for setting data  into cart

  useEffect(() => {
    // calling data from API
    fetch("./api.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data)); //inserting data to doctors state
  }, []);

  const handleGetAppoinment = (doctorInfo) => {
    //handling appoinment button
    const newCart = [...cart, doctorInfo];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="doctors-container">
        <h3> Total Doctors Found {doctors.length}</h3>
        {doctors.map((doctor) => (  //maping doctors array
          <DoctorsCart
            key={doctor.licence}
            doctor={doctor}   //passing object through props
            handleGetAppoinment={handleGetAppoinment} //  //passing function through props
          ></DoctorsCart>
        ))}
      </div>
      <div className="summary-container"> 
        <Cart cart={cart}></Cart>            
      </div>
    </div>
  );
};

export default Doctors;
