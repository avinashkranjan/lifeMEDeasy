import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Emergency.css'
import axios from 'axios';
import Ambulance from '../assets/ambulance.svg'
import { Card, CardBody } from 'reactstrap'
const Emergency = () => {
    useEffect(() => {
        
        const names = getData()
        console.log(names)
        setDNames(names)

        
    },[]);
    const history = useHistory()
    const [dnames,setDNames]= useState([])
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [emergency, setEmergency] = useState("")
    const [location, setLocation] = useState("")
    console.log(dnames)
    const getData = () => {
        const names = []
        axios.get('http://localhost:8000/doctors').then(res => {
            if (res.status == 200) {
                //console.log(res.data)
                
                const myArray = res.data.objects
                //const names = []
                //console.log(myArray)
                myArray.forEach((element) => {
                    names.push(element.name)
                    //console.log(element.name); // 100, 200, 300
                    //console.log(index); // 0, 1, 2
                    //console.log(array); // same myArray object 3 times
                });
                
            
            }
            

        })
        return names
    }

    const postData = (e) => {
        e.preventDefault()

        
            axios
                .post("http://localhost:8000/emergency", {
                    name,
                    email,
                    emergency,
                    location,
                })
                .then(res => {
                    if (res.status == 200) {
                        alert('Ambulance will be dispatched soon!')
                        history.push('/')
                    }

                })


        //history.push('/')


    }
    return (
        <div className="container">
            <div className="row  justify-content-center ">
                <Card className="mt-5 col-12 col-md-6 items">
                    <h1 className="title mt-5">Book an Ambulance</h1>
                    <CardBody>
                        <img
                            src={Ambulance}
                            alt="Ambulance Booking"
                            height="200px"
                        />
                        <form className="mt-5" onSubmit={postData}>
                            <input
                                className="inputitem"
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="inputitem"
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="inputitem"
                                type="text"
                                placeholder="Enter your Emergency"
                                value={emergency}
                                onChange={(e) => setEmergency(e.target.value)}
                            />
                            <textarea
                                className="inputitem"
                                type="text"
                                placeholder="Enter your Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <button className="red ripple" type='submit'>
                                Call Ambulance{' '}
                            </button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default Emergency;
