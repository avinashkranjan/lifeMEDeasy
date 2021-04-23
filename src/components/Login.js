import React, { Component } from 'react';
import { Card, CardBody} from 'reactstrap';
import './login.css';
import Img from '../assets/login2.png';
class Login extends Component {
    
    render() {
        return (
            <div className="container">
                <div className= "row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Login</h1>
                        <img src={Img} alt="login " height="500px" />
                        <CardBody>
                            <form >
                                <input className="inputitem" type="email" name="story" placeholder="Enter your email" />
                                <input className="inputitem" type="password" name="comment" placeholder="Enter the password" />
                                <button className="red ripple button">Submit</button>
                                <a href="/Forget">Forget Password ?</a> 
                            </form>
                            
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;
