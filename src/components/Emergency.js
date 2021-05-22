import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Emergency.css';
import "./PatientRegister";
import axios from 'axios';
import Ambulance from '../assets/ambulance.svg'
import { Card, CardBody } from 'reactstrap'
import { backend_url } from '../config';
const Emergency = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [emergency, setEmergency] = useState("")
    const [location, setLocation] = useState("")

    const postData = (e) => {
        e.preventDefault()
        axios
            .post(`${backend_url}/emergency`, {
                name,
                email,
                emergency,
                location,
            })
            .then(res => {
                if (res.status == 200) {
                    alert('Ambulance will be dispatched soon!')
                    history.push('/')
                }

            })

    }
    return (
        <div className="container">
            <div className="row  justify-content-center ">
                <Card className="mt-5 col-12 col-md-6 items">
                    <h1 className="title mt-5">Book an Ambulance</h1>
                    <CardBody>
                        <img
                            src={Ambulance}
                            alt="Ambulance Booking"
                            height="200px"
                        />
                        <form className="mt-5" onSubmit={postData}>
                            <input
                                className="inputitem"
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="inputitem"
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="inputitem"
                                type="text"
                                placeholder="Enter your Emergency"
                                value={emergency}
                                onChange={(e) => setEmergency(e.target.value)}
                            />
                            <textarea
                                className="inputitem"
                                type="text"
                                placeholder="Enter your Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <button className="button" type='submit'>
                                Call Ambulance{' '}
                            </button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default Emergency;
