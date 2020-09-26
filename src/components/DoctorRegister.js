import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import './Doctor.css';
import Doctor from "../assets/hospital.svg"
import register from "./helper.js"
const Doctorregister = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;
  const onSubmit = (event) => {;
    register({ name, email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.email === email) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: false,
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? <h1>hi</h1> : "none" }}
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
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };
  const registrationForm = () => {
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

                <button className="red ripple" onClick={onSubmit()}>Submit</button>
                <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <h1>
      {errorMessage()}
      {successMessage()}
      {registrationForm()}

    </h1>
  )

};
export default Doctorregister;
