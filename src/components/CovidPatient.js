import React, { Component } from 'react';
import './PatientRegister.css';
import './Covidpatient.css'
import { Card, CardBody } from 'reactstrap';
import hospital from '../assets/hospital.jpg';

export default class CovidPatient extends Component {
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Covid-19 patients</h1>

                        <CardBody>
                            <img src={hospital} alt="Doctor Examining Patient" height="200px" className="mt-30" />
                            <form className="mt-5">
                                <p>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue.</p>
                                <input className="inputitem" type="text" placeholder="Enter your name" />
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
                                <input className="inputitem" type="text" placeholder="Enter travel/contact History" />
                                <textarea className="inputitem" type="text" placeholder="Enter travel history in Detail"/>
                                <select className="abc">
                                <option  value="">Select symptoms</option>
                                    <option value="1">1.Fever</option>
                                    <option value="2">2.Shortness of Breath</option>
                                    <option value="3">3.Dry caugh</option>
                                    <option value="4">4.Flu like ilness</option>
                                    <option value="5">5.All of the above</option>
                                    <option value="6">6.option1 & 2</option>
                                    <option value="7">7.option1 & 3</option>
                                    <option value="8">8.None of the above</option>
                                </select> &nbsp;&nbsp;
                                <select className="abc" >
                                <option value="">Any other symptoms</option>
                                    <option value="1">Headache</option>
                                    <option value="2">Aches and Pains</option>
                                    <option value="3">Loss of taste or smell</option>
                                </select>

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
