class MessageParser{
    constructor(actionProvider){
        this.actionProvider=actionProvider;
    }

    parse(message){
        console.log(message);
        const lowercase=message.toLowerCase();
        if(lowercase.includes("hello")){
            this.actionProvider.greet();
        }
        if(lowercase.includes("Doctor")){
            this.actionProvider.handleDoctor();
        }
    }
}

export default MessageParser;