import React from "react"

class ActionProvider{
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage=createChatBotMessage;
        this.setState=setStateFunc;
    }
    
    handleHelp=()=>{
        const message=this.createChatBotMessage(
            "How can I help you??",
            {
                widget:"help"
            }
        );
        this.addMessageToState(message);
    };
    handleDoctor=()=>{
        const message=this.createChatBotMessage(
            "Have you register in our site??",
            {
                widget:"answers"
            }
               
        );
        this.addMessageToState(message);   
    };
    handlePatients=()=>{
        const message=this.createChatBotMessage(
            "Have you register in our site??",
            {
                widget:"answersPatients",
                
            }
        );
        this.addMessageToState(message);
    };
    handleYesOfDoctor=()=>{
        const message=this.createChatBotMessage(
            "Welcome...",
        )
        this.addMessageToState(message);
    };
    handleNoOfDoctor=()=>{
        const message=this.createChatBotMessage(
            "Please register by clicking the link below"
        )
        this.addMessageToState(message);
        const message1=this.createChatBotMessage(
            <a href="/Doctors">register</a>
        )
        this.addMessageToState(message1);
    };
    handleYesOfPatients=()=>{
        const message=this.createChatBotMessage(
            "Welcome...",
        )
        this.addMessageToState(message);
    };
    handleNoOfPatients=()=>{
        const message=this.createChatBotMessage(
            "Please register by clicking the link below"
        )
        this.addMessageToState(message);
        const message1=this.createChatBotMessage(
            <a href="/patients">register</a>
        )
        this.addMessageToState(message1);
    };
    handleDoctorRegistrationProblem=()=>{
        const message=this.createChatBotMessage(
            "Kindly check all the details properly..."
        )
        this.addMessageToState(message);
    }
    handlePatientsRegistrationProblem=()=>{
        const message=this.createChatBotMessage(
            "Kindly check all the details properly."
        )
        this.addMessageToState(message);
    }
    handleBookingProblem=()=>{
        const message=this.createChatBotMessage(
            "Sorry for that...All slot might have booked"
        )
        this.addMessageToState(message);
    }
    addMessageToState=(message)=>{
        this.setState((prevState)=>({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}
export default ActionProvider;