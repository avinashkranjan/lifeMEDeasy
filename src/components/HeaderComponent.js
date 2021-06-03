import React, { Component } from 'react'
import Doctor from '../assets/doctor2.svg'
import './Header.css';
import Map from './Map';
class Header extends Component {
  render() {
    return (
      <>
      <div className="container">
        
        <div className="row">
          <div className="col-6 md">
            <img src={Doctor} alt="Doctor Examining Patient" className="mt-5 img-fluid" />
          </div>
          <div className="col-6 md">
            <h1 className="title">Stay <span>Safe,</span>  Stay <span> Healty</span></h1>
            <h2>Caring For Your Life</h2>
            <a href="/login"><button className="red ripple mt-5 ml-3">Login </button></a>
            <br></br><br></br>
            <Map />
 
          </div>
        </div>
      </div>
      </>
    );
  }


}

export default Header;

