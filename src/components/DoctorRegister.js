import React, { useState } from "react";
import "./Doctor.css";
import "./PatientRegister";
import Doctor from "../assets/hospital.svg";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import axios from 'axios';
import { backend_url } from "../config";

const DoctorRegister = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const postData = (e) => {
    e.preventDefault();

    if (password === rpassword) {
      axios
          .post(`${backend_url}/doctor-register`, {
              name,
              email,
              password,
              locality,
              state,
          })
          .then(res => {
              if (res.status == 200) {
                  history.push('/Login')
              }

          })
  }
  else {
      console.log('passwords should match')
  }
  };

  return (
    <div className="container">
      <div className="row  justify-content-center ">
        <Card className="mt-5 col-12 col-md-6 items">
          <h1 className="title mt-5">Register as Hospital</h1>
          <CardBody>
            <img
              src={Doctor}
              alt="Doctor Examining Patient"
              height="200px"
              className="mt-3"
            />
            <form className="mt-5" onSubmit={postData}>
              <input
                className="inputitem"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="inputitem"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputitem"
                type="password"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="inputitem"
                type="password"
                placeholder="Repeat the password"
                value={rpassword}
                onChange={(e) => setrPassword(e.target.value)}
              />
              <input
                className="inputitem"
                type="text"
                name="comment"
                placeholder="Enter the locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
              <input
                className="inputitem"
                type="text"
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />

              <button type="submit" className="button">
                Submit
              </button>
            </form>
            <p className="linkitem mt-3">
              Have an account ? <a href="Login">Login</a>{" "}
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DoctorRegister;
