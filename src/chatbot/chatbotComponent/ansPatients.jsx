import React from 'react'
import DoctorRegister from '../../components/user/DoctorRegister.js'
const AnsPatients=(props)=>{
    const answersPatients=[
        {
            text:"Yes Done",
            handler: props.actionProvider.handleYesOfPatients,
            id: 1
        },
        {
            text: "Not Done",
            handler: props.actionProvider.handleNoOfPatients,
            id: 2
        }
    ];
    const buttonMarkup=answersPatients.map((answer)=>(
        <button key={answer.id} onClick={answer.handler} className="option-button">
            {answer.text}
        </button>
    ));
        return(
            <div>
                <div className="options-container">{buttonMarkup}</div>
            </div>
        )
    };
    export default AnsPatients 