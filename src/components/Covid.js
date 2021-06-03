import React from 'react';
import Covid1 from '../assets/covidDoc.svg';
import doctor from '../assets/doctorcov.svg';
import './Covid.css';

export default function Covid() {
    return (
        <div className="container">
        <h2 className="title">Your Medical Assistant, Get Started today</h2>
        <div className="row" >
            <div className="col-6 md">
            <img src={Covid1} alt="Doctor Examining Patient" height="350px" className="mt-5" />
            </div>
            <div className="col-6 md">
                <img src={doctor} alt="Doctor Examining Patient" height="350px" className="mt-5" />
            </div>
        
        </div>
        <br />
        <a href="/covidpatient"><button className="red ripple mt-5 ml-3">Covid tests </button></a>
        <a href="/covidtest"><button className="red ripple mt-5 ml-3">Covid Patients</button></a>
        <br />
      </div>
    )
}
