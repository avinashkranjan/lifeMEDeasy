import React from 'react'
import DoctorRegister from '../../components/DoctorRegister.js'
const Ans=(props)=>{
    const answers=[
        {
            text:"Yes Done",
            handler: props.actionProvider.handleYesOfDoctor,
            id: 1
        },
        {
            text: "Not Done",
            handler: props.actionProvider.handleNoOfDoctor,
            id: 2
        }
    ];
    const buttonMarkup=answers.map((answer)=>(
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
    export default Ans