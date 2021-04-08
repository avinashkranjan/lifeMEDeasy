import React, { Component } from 'react';
import './Covidtest.css';
import './PatientRegister.css';
import test from '../assets/covid.jpg';
import { Card, CardBody } from 'reactstrap';


export default class Covidtest extends Component {
    render() {
        
        return (
          <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register for Covid-19 Tests</h1>
                        <CardBody>
                            <img src={test} alt="Doctor Examining Patient" height="200px" className="mt-30" />
                            <form className="mt-5">
                              <p>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue.</p>
                                <input className="inputitem" type="text" placeholder="Enter your name" />
                                <input className="inputitem" type="text" placeholder="Enter your Father/Husband" />
                                <input className="inputitem" type="number" placeholder="Enter your AadharCard number" />
                                <input className="abc" type="date" placeholder="DD/MM/YY"/> &nbsp;&nbsp;
                                <input className="abc" type="number" placeholder="Enter your phone number"/>
                                <input className="abc" type="number" placeholder="Enter your age"/>&nbsp;&nbsp;
                                <input className="abc" type="text" placeholder="Enter your gender"/>
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
        )
    }
}

