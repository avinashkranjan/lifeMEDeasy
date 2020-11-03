import React, { Component } from "react"
import fire from "../Firebase/fire.js";
import { Card, CardBody } from "reactstrap"
import Doctor from "../../assets/hospital.svg";;
class DoctorSignupForm extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            password: "",
            f_name: "",
            l_name: "",
            user_type: "",
            gender: "",
            mobile: "",
            address: "",
        }
    }
    signup(val) {
        val.preventDefault();
        const { history } = this.props;
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((e) => {
            console.log(e);
            history.push('/')
        })
            .catch((err) => {
                console.log(err);
            });

        fire.firestore().collection("users").add({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.mobile,
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
            <div>
                <div className="container">
                    <div className="row  justify-content-center ">
                        <Card className="mt-5 col-12 col-md-6 items">
                            <h1 className="title mt-5">Register as Hospital</h1>
                            <CardBody>
                                <img src={Doctor} alt="" height="200px" />
                                <form className="mt-5">
                                    <input className="inputitem" onChange={this.handleChange}
                                        type="name" name="name" id="name" placeholder="Enter Your Name" />
                                    <input className="inputitem" onChange={this.handleChange}
                                        type="phone_number" name="phone_number" id="phone_number" placeholder="Enter Your Enter Your Phone number" />
                                    <input className="inputitem" onChange={this.handleChange}
                                        type="email" name="email" id="email" value={this.state.email} placeholder="Enter your email" />
                                    <input className="inputitem" type="password" name="password" email="password" value={this.state.password} onChange={this.handleChange}
                                        type="password" placeholder="Enter the password" />
                                    <button className="red ripple" onClick={this.signup}>Submit</button>
                                    <p className="linkitem mt-3">Have an account ? <a href="DoctorLogin">Login</a> </p>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}

export default DoctorSignupForm