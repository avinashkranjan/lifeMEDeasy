import React, { Component } from "react";
import "./Emergency.css";
import Ambulance from "../assets/ambulance.svg";
import { Card, CardBody } from "reactstrap";
class DoctorRegister extends Component {
  render() {
    return (
      <div className="container">
        <div className="row  justify-content-center ">
          <Card className="mt-5 col-12 col-md-6 items">
            <h1 className="title mt-5">Book an Ambulance</h1>
            <CardBody>
              <img src={Ambulance} alt="Ambulance Booking" height="200px" />
              <form className="mt-5">
                <input
                  className="inputitem"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="inputitem"
                  type="email"
                  placeholder="Enter your Email"
                />
                <input
                  className="inputitem"
                  type="text"
                  placeholder="Enter your Emergency"
                />
                <textarea
                  className="inputitem"
                  type="text"
                  placeholder="Enter your Location"
                />
                <button className="red ripple">Call Ambulance </button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default DoctorRegister;
