import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import './Doctor.css';
import Doctor from "../assets/hospital.svg"
class Doctorregister extends Component {
  state = {
    credentials: {name: '', email: '', password:'', success:false}
  }
   register = (event) => {
    fetch('http://127.0.0.1:8000/api/doctors/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
      .then(
        data => {
          console.log(data.token);
          if(data.email){
            this.success=true
          }
        }
      )
      .catch(error => console.error(error))
  };
  successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
         
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

 registrationForm = () => {
    return (
      <div className="container">
        <div className="row  justify-content-center ">
          <Card className="mt-5 col-12 col-md-6 items">
            <h1 className="title mt-5">Register as Hospital</h1>
            <CardBody>
              <img src={Doctor} height="200px" />
              <form className="mt-5">
                <input className="inputitem" type="text" placeholder="Enter the name" />
                <input className="inputitem" type="email" placeholder="Enter your email" />
                <input className="inputitem" type="password" placeholder="Enter the password" />
                {/* <input className="inputitem" type="password" placeholder="Repeat the password" />
                                <input className="inputitem" type="text" placeholder="Enter the locality" />
                                <input className="inputitem" type="text" placeholder="Enter your state" /> */}

                <button className="red ripple" onClick={this.register()}>Submit</button>
                <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };
  render(){
  return (
    <h1>
      {this.registrationForm()}

    </h1>
  )
  }
};
export default Doctorregister;
