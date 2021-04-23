import React from 'react';
import './Forget.css';
import { Card, CardBody} from 'reactstrap';
import Img from '../assets/for.png';

export default function Forget() {
    return (
        <div className="container">
                <div className= "row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Forget Password</h1>
                        <img src={Img} alt="forget password" height="500px" />
                        <h4>You can regenerate password <br></br>
                            Just fill the form
                        </h4>
                        <CardBody>
                            <form >
                            <input className="inputitem" type="text" name="story" placeholder="Enter your Full name" />
                                <input className="inputitem" type="email" name="story" placeholder="Enter your email" />
                                <input className="inputitem" type="password" name="comment" placeholder="Enter the password" />
                                <input className="inputitem" type="password" name="comment" placeholder="Repeat the password" />
                                <button className="red ripple">Submit</button>
                                
                            </form>
                            
                        </CardBody>
                    </Card>
                </div>
            </div>
    )
}
