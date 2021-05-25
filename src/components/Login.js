import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";

import "./login.css";
import "./PatientRegister.css";
import Img from '../assets/Login.svg';

import axios from 'axios';
import { backend_url } from "../config";

const Login = () => {
  const history = useHistory();
  const [dark, setMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("Patient");
  // const sel = ()=>{
  //     console.log(select)
  // }
  const postData = (e) => {
    e.preventDefault();
    //console.log(select)
    axios
      .post(`${backend_url}/login`, {
        email,
        select,
        password,
      })
      .then((res) => {
        //console.log(res.data)

        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          history.push("/");
        }
      });
  };
  return (
    <div className="container">
      <div className="row  justify-content-center ">

        <Card
          className={
            dark
              ? "mt-5 col-12 col-md-6 items dark-mode"
              : "mt-5 col-12 col-md-6 items container2"
          }
        >
          <div className="nav">
            <label className="switch">
              <input type="checkbox" onChange={() => setMode(!dark)} />
              <span className="slider round"></span>
            </label>
          </div>
          <h1 className="title mt-5">Login</h1>
        </Card>
        <Card className="mt-5 col-12 col-md-6 items">

          <h1 className="title mt-5">Login</h1>
          <img
            src={Img}
            alt="Doctor Examining Patient"
            height="500px"
            className="mt-3"
          />
          <CardBody>
            <form onSubmit={postData}>

              <select className="inputitem border shadow" value={select} onChange={(e) => setSelect(e.target.value)}>

                <option value="Doctor">Doctor</option>
                <option selected value="Patient">
                  Patient
                </option>
              </select>
              <input
                className="inputitem border shadow"
                type="email"
                name="story"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputitem border shadow"
                type="password"
                name="comment"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" type='submit'>Submit</button>
              <a href="/Forget">Forgot Password ?</a> 
              <br></br>
            </form>
            <br></br>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
