import React, { Component } from 'react'
import DoctorLoginForm from "./DoctorLoginForm.js";
import Home from "../Home.js";
import fire from "../Firebase/fire";
export class DoctorLogin extends Component {
	constructor(){
		super();
		this.authListener=this.authListener.bind(this);
		this.state={
			user: null,
		};
	}
	componentDidMount(){
		this.authListener()
	}
	authListener(){
		fire.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({user});
			}else{
				this.setState({user: null});
			}
		});
	}
    render() {
        return (
            <div>
                {this.state.user?(<Home/>):(<DoctorLoginForm/>)}
            </div>
        )
    }
}

export default DoctorLogin
