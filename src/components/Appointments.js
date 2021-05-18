import React, { Component } from 'react'
import './PatientRegister.css'
import axios from 'axios';
import { Card, CardBody } from 'reactstrap'
import Doctor from '../assets/doctor.svg'
import { backend_url } from '../config';
import { GoogleLogin } from 'react-google-login';

class Register extends Component {
    constructor(props) {

        super(props);
        this.state = {
            doctor_names: ['abc', 'def'],
            name: "",
            doctor: "",
            date: "",
            time: "",
            values: "",

        };

        this.postData = this.postData.bind(this);

    }
    componentDidMount() {

        const names = []
        axios
            .get(`${backend_url}/doctors`)
            .then(res => {

                const myArray = res.data.objects
                myArray.forEach((element) => {
                    names.push(element.name)
                });

                this.setState({
                    doctor_names: names,
                });

            })
    }

    postData(e) {
        
        e.preventDefault()
        axios
            .post(`${backend_url}/appointment`, {

                name: this.state.name,
                doctor: this.state.doctor,
                date: this.state.date,
                time: this.state.time,
            })
            .then(res => {
                if (res.status == 200) {
                    alert('appointment booked!')
                }

            })
    }

    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
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
                                <button className="red ripple mt-3" type='submit'>
                                    Submit
                                </button>
                                <p>OR</p>
                                <GoogleLogin buttonText="Sign in with Google" />
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Register
