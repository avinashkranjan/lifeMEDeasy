import React, { useState } from 'react';
import './PatientRegister.css';
import { Card, CardBody } from 'reactstrap';
import Doctor from '../assets/doctor.svg';
function Register() {
    const[dark,setMode] = useState(false)


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
                        <h1 className="title mt-5">Meet a doctor</h1>
                        <CardBody>
                            <img
                                src={Doctor}
                                alt="Doctor Examining Patient"
                                height="200px"
                                className="mt-3"
                            />
                            <form className="mt-5" onSubmit={this.postData}>
                                <input
                                    className="inputitem"
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={e => this.setState({ name: e.target.value })}
                                />

                                <select className="inputitem" onChange={e => this.setState({ doctor: e.target.value })}>
                                    <option selected value="">
                                        Select Doctor
                                    </option>
                                    {this.state.doctor_names.map(fbb =>
                                        <option key={fbb.key} value={fbb}>{fbb}</option>
                                    )};
                                </select>

                                <label htmlFor="appointment">
                                    Choose Date{' '}
                                </label>
                                <input
                                    type="date"
                                    id="appointment"
                                    name="appointment"
                                    onChange={e => this.setState({ date: e.target.value })}
                                ></input>
                                <br />
                                <label htmlFor="appt">Choose Time</label>
                                <input
                                    className="mt-3"
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    onChange={e => this.setState({ time: e.target.value })}
                                ></input>
                                <br />
                                <button className="button" type='submit' >
                                    Submit
                                </button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>

        );

}

export default Register
