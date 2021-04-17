import React, { useState } from 'react';
import { Card, CardBody} from 'reactstrap';
import './login.css';
function Login () {
    const[dark,setMode] = useState(false)
        return (
            <div className="container">
                <div className= "row  justify-content-center ">
                    <Card className={dark ? "mt-5 col-12 col-md-6 items dark-mode": "mt-5 col-12 col-md-6 items"}>
                    <div className="nav">
                            <label class="switch">
                                <input type="checkbox" onChange={()=>setMode(!dark)}/>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <h1 className="title mt-5">Login</h1>
                        <CardBody>
                            <form >
                                <input className="inputitem" type="email" name="story" placeholder="Enter your email" />
                                <input className="inputitem" type="password" name="comment" placeholder="Enter the password" />
                                <button className="red ripple">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );

}

export default Login;
