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
                        <h1 className="title mt-5">Meet a doctor</h1>
                        <CardBody>
                            <img src={Doctor} alt="Doctor Examining Patient" height="200px" className="mt-3" />
                            <form className="mt-5">
                                <input className="inputitem" type="text" placeholder="Enter your name" />
                                <input className="inputitem" type="text" placeholder="Which doctor ?" />

                                <label HTMLfor="appointment">Choose Date </label>
                                <input type="date" id="appointment" name="appointment"></input>
                                <br />
                                <label HTMLfor="appt">Choose Time</label>
                                <input className = "mt-3" type="time" id="appt" name="appt"></input>
                                <br/>
                                <button className="red ripple mt-3">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

          
export default Register ;