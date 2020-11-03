import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import './login.css';
import fire from "../Firebase/fire.js"
import { Link } from 'react-router-dom';
import Doctor from "../../assets/doctor.svg"
class DoctorLoginForm extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }
    login(val) {
        val.preventDefault();
        const { history } = this.props;
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((e) => {
            console.log(e);
            history.push('/')
        })
            .catch((err) => {
                console.log(err);
            });

        fire.firestore().collection("users").add({
            email: this.state.email,
            password: this.state.password
        })
            .then((doc) => {
                console.log("user added with doc id as : ", doc.id);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Login</h1>
                        <CardBody>
                            <img src={Doctor} alt="" height="200px" />
                            <br />
                            <br />
                            <form >
                                <input className="inputitem" onChange={this.handleChange}
                                    type="email" name="email" id="email" value={this.state.email} placeholder="Enter your email" />
                                <input className="inputitem" type="password" name="password" email="password" value={this.state.password} onChange={this.handleChange}
                                    type="password" placeholder="Enter the password" />
                                <button className="red ripple" onClick={this.login}>Login</button>
                                <br />
                                <br />
                                <Link to="DoctorsRegistration"><button className="red ripple">Signup</button></Link>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default DoctorLoginForm;