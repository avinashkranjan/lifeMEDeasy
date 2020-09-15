class MessageParser{
    constructor(actionProvider){
        this.actionProvider=actionProvider;
    }

    parse(message){
        console.log(message);
        const lowercase=message.toLowerCase();
        if(lowercase.includes("help me")){
            this.actionProvider.handleHelp();
        }
    }
}

export default MessageParser;