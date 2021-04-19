
import React, { useState } from 'react';
import { Card, CardBody} from 'reactstrap';
import './login.css';
import {useHistory} from 'react-router-dom';
function Login () {
    const[dark,setMode] = useState(false)

    const history = useHistory()
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [select,setSelect] = useState("Patient")
    // const sel = ()=>{
    //     console.log(select)
    // }
    const postData = (e)=>{
        e.preventDefault()
        console.log(select)
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            console.log("invalid email")
        }
        fetch('http://localhost:8000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            email,
            select,

        
        }),

    }).then(res=>{
        if(res.status == 200){
            history.push('/')
        }
        
    })  }

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
                            <form onSubmit={postData}>
                            <select className="inputitem" value = {select} onChange={(e)=>setSelect(e.target.value)}>

                  <option  value="Doctor">Doctor</option>
                  <option selected value="Patient">
                    Patient
                  </option>
                </select>
                                <input className="inputitem" type="email" name="story" placeholder="Enter your email" value={email}
                  onChange = {(e)=> setEmail(e.target.value)} />
                                <input className="inputitem" type="password" name="comment" placeholder="Enter the password"  value={password}
                  onChange = {(e)=> setPassword(e.target.value)}/>
                                <button className="red ripple">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );

}

export default Login;

