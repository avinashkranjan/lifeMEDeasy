import React, {useState} from 'react';
import './PatientRegister.css';
import './Covidpatient.css'
import { Card, CardBody } from 'reactstrap';
import hospital from '../assets/hospital.jpg';
import {Multiselect} from 'multiselect-react-dropdown'
import usePasswordToggle from "../hooks/usePasswordToggle";

export default function CovidPatient() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    const data1 = [
        
        {
            value:1,
            label:'Fever' 
        },
        {
            value:2,
            label:"Shortness of Breath"
        },
        {
            value:3,
            label:"Dry caugh"
        },
        {
            value:4,
            label:"Flu like ilness"
        },
        {
            value:5,
            label:"All of the above"
        },
        {
            value:6,
            label:"option1 & 2"
        },
        {
            value:7,
            label:"option1 & 3"
        },
        {
            value:8,
            label:"None of the above"
        }
    
    
    ]
const data2 = [
        {value:1,label:'Headache'},
        {value:2,label:'Aches and Pains'},
        {value:3,label:'Loss of taste or smell'},
        {value:4,label:'All of the above'}
    ]

    const [options] = useState(data1);
    const [selections] = useState(data2);
    return (
        <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Covid-19 patients</h1>

                        <CardBody>
                            <img src={hospital} alt="Doctor Examining Patient" height="200px" className="mt-30" />
                            <form className="mt-5">
                                <p>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue.</p>
                                <input className="inputitem" type="text" placeholder="Enter your name" />
                                <input className="inputitem" type="number" placeholder="Enter your AadharCard number" />
                                <input className="details" type="date" placeholder="DD/MM/YY"/> &nbsp;&nbsp;
                                <input className="details" type="number" placeholder="Enter your phone number"/>
                                <input className="details" type="number" placeholder="Enter your age"/>&nbsp;&nbsp;
                                <input className="details" type="text" placeholder="Enter your gender"/>
                                <input className="inputitem" type="email" placeholder="Enter your email" />
                                <input className="inputitem" type={PasswordInputType} placeholder="Enter the password" /><span className="password-toggle-icon-covidpatient">
                                    {ToggleIcon}
                                </span>
                                <input className="inputitem" type="password" placeholder="Repeat the password" />
                                <input className="inputitem" type="text" name="comment" placeholder="Enter the locality" />
                                <input className="inputitem" type="text" placeholder="Enter your state" />
                                <input className="inputitem" type="text" placeholder="Enter travel/contact History" />
                                <textarea className="inputitem" type="text" placeholder="Enter travel history in Detail"/>
                                <div className="selection" >
                                    <Multiselect  options={options} displayValue="label" placeholder="Select Symptoms"/>
                                </div><br></br>
                                <div className="selection">
                                    <Multiselect  options={selections} displayValue="label" placeholder="Any other Symptoms"/>
                                </div>
                                <br/>
                                <button className="red ripple">Submit</button>
                            </form>
                            <p className="linkitem mt-3">Have an account ? <a href="Login">Login</a> </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
    )
}

