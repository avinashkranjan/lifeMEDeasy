import React,{useState} from 'react';
import './PatientRegister.css';
import { Card, CardBody } from 'reactstrap';
import Doctor from '../assets/doctor.svg';
import { GoogleLogin } from 'react-google-login';

function Register() {
    const[dark,setMode] = useState(false)



        return (
            <div className="container">
                <div className="row  justify-content-center ">

                    <Card className={dark ? "mt-5 col-12 col-md-6 items dark-mode": "mt-5 col-12 col-md-6 items container2"}>
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
                            <form className="mt-5" >
                                <input
                                    className="inputitem border shadow"
                                    type="text"
                                    placeholder="Enter your name"
                                />

                                <select className="inputitem" >
                                </select>

                                <label htmlFor="appointment">
                                    Choose Date{' '}
                                </label>
                                <input 
                                    type="date"
                                    id="appointment"
                                    name="appointment"
                                ></input>
                                <br />
                                <label htmlFor="appt">Choose Time</label>
                                <input
                                    className="mt-3 "
                                    type="time"
                                    id="appt"
                                    name="appt"
                                ></input>
                                <br />
                                <button className="button" type='submit' >
                                    Submit
                                </button>
                                <p>OR</p>
                                <GoogleLogin  buttonText="Sign in with Google" />
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>

        );

}

export default Register
