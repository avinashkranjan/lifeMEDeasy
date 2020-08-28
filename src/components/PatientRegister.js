import React, { Component } from 'react';
import './PatientRegister.css';
import { Card, CardBody } from 'reactstrap';
class Register extends Component {
    render() {
        return ( 
            <div className = "container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Patient</h1>
                        <CardBody>
                            <form>
                                <input className="inputitem" type="text"  placeholder="Enter your name" />
                                <input className="inputitem" type="email" placeholder="Enter your email" />
                                <input className="inputitem" type="password"  placeholder="Enter the password" />
                                <input className="inputitem" type="password"  placeholder="Repeat the password" />
                                <input className="inputitem" type="text"  placeholder="Enter your state" />
                                <input className="inputitem" type="text" name="comment" placeholder="Enter the locality" />
                                <button className="red ripple">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>  
        );
    }
}

export default Register;