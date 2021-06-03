import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './PatientRegister.css';
import { Card, CardBody } from 'reactstrap';
import Doctor from '../assets/doctor.svg';
import axios from 'axios';
import { backend_url } from '../config';
import { GoogleLogin } from 'react-google-login';
import usePasswordToggle from "../hooks/usePasswordToggle";

const [PasswordInputType, ToggleIcon] = usePasswordToggle();

const Register = () => {
    
    const[dark,setMode] = useState(false)
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rpassword, setrPassword] = useState("")
    const [locality, setLocality] = useState("")
    const [state, setState] = useState("")
    const postData = (e) => {
        e.preventDefault()

        if (password === rpassword) {
            axios
                .post(`${backend_url}/patient-register`, {
                    name,
                    email,
                    password,
                    locality,
                    state,
                })
                .then(res => {
                    if (res.status === 200) {
                        history.push('/Login')
                    }

                })
        }
        else {
            console.log('passwords should match')
        }


    }
    return (
        <div className="container">
            <div className="row  justify-content-center ">
     <Card className={dark ? "mt-5 col-12 col-md-6 items dark-mode": "mt-5 col-12 col-md-6 items container2"}>
                        <div className="nav">
                        <label className="switch" >
                        <input type="checkbox" onChange={()=>setMode(!dark)}/>
                        <span className="slider round"></span>
                        </label>
                        </div>
                    <h1 className="title mt-5">Register as Patient</h1>

                    <CardBody>
                        <img src={Doctor} alt="Doctor Examining Patient" height="200px" className="mt-3" />
                        <form className="mt-5" onSubmit={postData}>
                            <input className="inputitem border shadow" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input className="inputitem border shadow" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className="inputitem border shadow" type={PasswordInputType} placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="password-toggle-icon-covidpatient">
                                    {ToggleIcon}
                                </span>
                            <input className="inputitem border shadow" type="password" placeholder="Repeat the password" value={rpassword} onChange={(e) => setrPassword(e.target.value)} />
                            <input className="inputitem border shadow" type="text" name="comment" placeholder="Enter the locality" value={locality} onChange={(e) => setLocality(e.target.value)} />
                            <input className="inputitem border shadow" type="text" placeholder="Enter your state" value={state} onChange={(e) => setState(e.target.value)} />
                            <button className="button" type='submit'>Submit</button>
                            <p>OR</p>
                                <GoogleLogin buttonText="Sign in with Google" />
                        </form>
                        <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );

}

export default Register;
