import React, { Component } from "react";
import './Doctor.css';
import DoctorSignupForm from "./DoctorSignupForm.js"
import fire from "../Firebase/fire.js"
import Home from "../Home.js";
import SignupSuccessMessage from "./SignupSuccessMessage";
class DoctorRegister extends Component {
  constructor(){
    super();
    this.authListener=this.authListener.bind(this);
    this.state={
      user:null,
    };
   
  }
  componentDidMount(){
    this.authListener()
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
        localStorage.setItem('user', user.uid)
      }else{
        this.setState({user: null});
        localStorage.removeItem('user')
      }
    });
  }
  render() {
    console.log(this.state.user)
    return (
      <div>
        {this.state.user?(<SignupSuccessMessage/>):(<DoctorSignupForm/>)}
      </div>
    )
  }
}

export default DoctorRegister

