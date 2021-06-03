import React from 'react';
import NotFound from '../assets/Error.svg';
import './PatientRegister.css';

export default function Error() {
    return (
        <div className="container">
            <div>
                <img height="500px" className="mt-3" src={NotFound} alt="404 error" />
            </div>
            <div>
                <button className="button">
                    <a href="/" style={{color:"white"}}>Back</a>
                    
                </button>
            </div>
        </div>
    )
}
