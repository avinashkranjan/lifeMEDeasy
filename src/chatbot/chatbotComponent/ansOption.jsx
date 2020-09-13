import React from 'react'
const Ans=(props)=>{
    const answers=[
        {
            text:"Yes",
            handler: props.actionProvider.handleYesOfDoctor,
            id: 1,
        },
        {
            text: "No",
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
