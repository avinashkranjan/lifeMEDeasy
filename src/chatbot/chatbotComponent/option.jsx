import React from "react";
import "./option.css";
const Options=(props)=>{
    const options=[
        {
            text:"Doctor",
            handler: props.actionProvider.handleDoctor,
            id: 1,
        },
        {
            text: "Patients",
            handler: props.actionProvider.handlePatients,
            id: 2
        }
    ];
    const buttonsMarkup=options.map((option)=>(

            <button key={option.id} onClick={option.handler} className="option-button">
                 {option.text}
            </button>
    ));
    return(
        <div>
             <div className="options-container">{buttonsMarkup}</div>
        </div>
       
    )
};
export default Options;