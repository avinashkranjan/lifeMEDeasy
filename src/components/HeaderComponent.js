import React, { Component } from 'react';
import Doctor from '../assets/doctor.svg';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title mt-3">Your Medical Assistant <p> Get Started Today </p></h1>
        <img src={Doctor} alt="Doctor Examining Patient" height="200px" className="mt-5" />
        <br />
        <a href="Doctors"><button className="red ripple mt-5 ml-3">Doctors </button></a>
        <a href="patients"><button className="red ripple mt-5 ml-3">Patients</button></a>
        <a href="covid-patient"><button className="red ripple mt-5 ml-3">Covid Patients</button></a>
        <br />
      </div>
    );
  }

}

export default Header;
