import React, { useState } from 'react';
import './Doctor.css';
import Doctor from '../assets/hospital.svg'
import { Card, CardBody } from 'reactstrap';
function DoctorRegister() {
    const[dark,setMode] = useState(false)

        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className={dark ? "mt-5 col-12 col-md-6 items dark-mode": "mt-5 col-12 col-md-6 items"}>
                        <div className="nav">
                            <label class="switch">
                                <input type="checkbox" onChange={()=>setMode(!dark)}/>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <h1 className="title mt-5">Register as Hospital</h1>
                        <CardBody >
                            <img src={Doctor} alt="Doctor Examining Patient" height="200px" />
                            <form className="mt-5">
                                <input className="inputitem" type="text" placeholder="Enter the name" />
                                <input className="inputitem" type="email" placeholder="Enter your email" />
                                <input className="inputitem" type="password" placeholder="Enter the password" />
                                <input className="inputitem" type="password" placeholder="Repeat the password" />
                                <input className="inputitem" type="text" placeholder="Enter the locality" />
                                <input className="inputitem" type="text" placeholder="Enter your state" />

                                <button className="red ripple">Submit</button>
                                <p className="linkitem mt-3">Have an account ? <a className="linkitem mt-3" href="Login">Login</a> </p>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );

}

export default DoctorRegister;
