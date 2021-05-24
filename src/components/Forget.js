import React from 'react';
import './Forget.css';
import { Card, CardBody} from 'reactstrap';
import Img from '../assets/forgot.svg';
import "./PatientRegister.css"

export default function Forget() {
    return (
        <div className="container">
                <div className= "row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items container2">
                        <h1 className="title mt-5">Forgot Password</h1>
                        <img src={Img} alt="forget password" height="300px"  className="mt-3" />
                        <CardBody>
                        
                            <form >
                            <input className="inputitem border shadow" type="text" name="story" placeholder="Enter your Full name" />
                                <input className="inputitem border shadow" type="email" name="story" placeholder="Enter your email" />
                                <input className="inputitem border shadow" type="password" name="comment" placeholder="Enter the password" />
                                <input className="inputitem border shadow" type="password" name="comment" placeholder="Repeat the password" />
                                <button className="red ripple">Submit</button>
                                
                            </form>
                            
                        </CardBody>
                    </Card>
                </div>
            </div>
    )
}
