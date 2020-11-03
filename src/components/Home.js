import React, { Component } from 'react'
import fire from "./Firebase/fire.js";
export class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Welcome...</h1>
                    <button className="red ripple" onClick={this.logout}>logout</button>
                </center>

            </div>
        )
    }
}

export default Home
