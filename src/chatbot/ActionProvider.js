class ActionProvider{
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage=createChatBotMessage;
        this.setState=setStateFunc;
    }
    greet=()=>{
        const message=this.createChatBotMessage("Hello friend.");
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
                widgets:"answers",
                loading: true
            }
        );
        this.addMessageToState(message);
    };
    handleYesOfDoctor=()=>{
        const message=this.createChatBotMessage(
            "Welcome..."
        )
        this.addMessageToState(message);
    };
    handleNoOfDoctor=()=>{
        const message=this.createChatBotMessage(
            "Please register by going to the register section of our website"
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