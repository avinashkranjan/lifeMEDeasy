import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import './login.css'
class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Login</h1>
                        <CardBody>
                            <form>
                                <input
                                    className="inputitem"
                                    type="email"
                                    name="story"
                                    placeholder="Enter your email"
                                />
                                <input
                                    className="inputitem"
                                    type="password"
                                    name="comment"
                                    placeholder="Enter the password"
                                />
                                <button className="red ripple">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login
