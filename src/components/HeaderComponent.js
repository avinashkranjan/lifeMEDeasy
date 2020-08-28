import React, {Component} from 'react';
import Doctor from '../assets/doctor.svg';
import './Header.css';
class Header extends Component 
{
  render(){
    return (
      <div className = "container">    
                <h1 className="title mt-5">Your Medical Assistant, Get Started today</h1>
                <img src={Doctor} height="200px" className="mt-5" />
                <br />
                <a href=""><button className="red ripple mt-5 ml-3">For Doctors </button></a>
                <a href=""><button className="red ripple mt-5 ml-3">For Patients</button></a>
      </div>
    );
  }
 
}

export default Header;