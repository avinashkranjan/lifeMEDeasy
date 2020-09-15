import React from 'react';
const HelpOptions=(props)=>{
    const help=[
        {
            text: "I am a Doctor and unable to register",
            handler: props.actionProvider.handleDoctorRegistrationProblem,
            id: 1
        },
        {
            text: "I am a Patients and unable to register",
            handler: props.actionProvider.handlePatientsRegistrationProblem,
            id: 2
        },
        {
            text: "Unable to book apointment",
            handler: props.actionProvider.handleBookingProblem,
            id: 3
        }
    ];
    const buttonsMarkup=help.map((helpOption)=>(
        <button key={helpOption.id} onClick={helpOption.handler} className="option-button">
            {helpOption.text}
        </button>
    ));
    return(
        <div>
             <div className="options-container">{buttonsMarkup}</div>
        </div>
       
    )
}
export default HelpOptions