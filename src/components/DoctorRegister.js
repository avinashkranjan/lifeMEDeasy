import React, { useState } from "react";
import "./Doctor.css";
import "./PatientRegister";
import Doctor from "../assets/hospital.svg";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
//import axios from 'axios';
//import { backend_url } from "../config";

const DoctorRegister = () => {
  const [dark,setMode] =useState(false)
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const postData = (e) => {
    e.preventDefault();
    if (
      //eslint-disable-next-line
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      console.log("invalid email");
    }
    if (password === rpassword) {
      fetch("http://localhost:8000/doctor-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          email,
          locality,
          state,
        }),
      }).then((res) => {
        if (res.status === 200) {
          history.push("/Login");
        }
      });
    }
    else{
        console.log('passwords should match')
    }
  };

        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className={dark ? "mt-5 col-12 col-md-6 items dark-mode": "mt-5 col-12 col-md-6 items"}>
                        <div className="nav">
                            <label className="switch">
                                <input type="checkbox" onChange={()=>setMode(!dark)}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <h1 className="title mt-5">Register as Hospital</h1>
                        <CardBody >
                            <img src={Doctor} alt="Doctor Examining Patient" height="200px" />
                            <form className="mt-5" onSubmit={postData}>
                                <input className="inputitem" type="text" placeholder="Enter the name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <input className="inputitem" type="email" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                                <input className="inputitem" type="password" placeholder="Enter the password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                                <input className="inputitem" type="password" placeholder="Repeat the password" value={rpassword}
                onChange={(e) => setrPassword(e.target.value)}/>
                                <input className="inputitem" type="text" placeholder="Enter the locality" value={locality}
                onChange={(e) => setLocality(e.target.value)}/>
                                <input className="inputitem" type="text" placeholder="Enter your state" value={state}
                onChange={(e) => setState(e.target.value)}/>


<button className="red ripple">Submit</button>
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
