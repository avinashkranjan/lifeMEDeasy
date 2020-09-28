import React, { Component } from 'react';
import './PatientRegister.css';
import { Card, CardBody } from 'reactstrap';
import Doctor from '../assets/doctor.svg';
class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Patient</h1>

                        <CardBody>
                            <img src={Doctor} alt="" height="200px" className="mt-3" />
                            <form className="mt-5">
                                <input className="inputitem" type="text" placeholder="Enter your name" />
                                <input className="inputitem" type="email" placeholder="Enter your email" />
                                <input className="inputitem" type="password" placeholder="Enter the password" />
                                <input className="inputitem" type="password" placeholder="Repeat the password" />
                                <input className="inputitem" type="text" name="comment" placeholder="Enter the locality" />
                                <input className="inputitem" type="text" placeholder="Enter your state" />
                               
                                <button className="red ripple">Submit</button>
                            </form>
                            <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Register;