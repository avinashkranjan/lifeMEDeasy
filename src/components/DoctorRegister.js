import React, { Component } from 'react';
import './Doctor.css';
import Doctor from '../assets/hospital.svg'
import { Card, CardBody } from 'reactstrap';
import { useHistory } from "react-router-dom";
class DoctorRegister extends Component {
    render() {
        return (
            <>
            <div className="container">
                
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Hospital</h1>
                        <CardBody>
                            <img src={Doctor} alt="Doctor Examining Patient" height="200px" />
                            <form className="mt-5">
                                <input className="inputitem" type="text" placeholder="Enter the name" />
                                <input className="inputitem" type="email" placeholder="Enter your email" />
                                <input className="inputitem" type="password" placeholder="Enter the password" />
                                <input className="inputitem" type="password" placeholder="Repeat the password" />
                                <input className="inputitem" type="text" placeholder="Enter the locality" />
                                <input className="inputitem" type="text" placeholder="Enter your state" />

                                <button className="red ripple">Submit</button>
                                <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </>
        );
    }

}

export default DoctorRegister;
