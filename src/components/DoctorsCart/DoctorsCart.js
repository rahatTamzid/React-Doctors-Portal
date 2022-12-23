import React from "react";
import "./DoctorsCart.css";


const DoctorsCart = (props) => {
  const {
    name,
    image,
    speciality,
    designation,
    experience,
    appoinment,
    fee,
    licence,
  } = props.doctor;     //Destructuring Object

  return (
    

  
<div className="DoctorCard">
      <div className="grid">
        <div class="doctor-block-two ">
          <div class="inner-box">
            <div class="info-box">
              <h4 class="name"> Dr. {name}</h4>
              <span class="designation">{speciality}</span>
            </div>
            <div class="image-box">
              <figure class="image">
                <img src={image} alt="" />
              </figure>
            </div>
            <div class="social-box">
              <ul>
                <li>{designation}</li>
                <li>Years Of Experience {experience}</li>
                <li>Total Available Slot{appoinment} </li>
                <li>Consultation Fee {fee}</li>
                <li>BMDC Licence No {licence}</li>
                <button
                  type="button"
                  class="button"
                  onClick={() => props.handleGetAppoinment(props.doctor)}
                >
                  Book Appoinment{" "}
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default DoctorsCart;
