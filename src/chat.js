import React from 'react'
import Chatbot from 'react-chatbot-kit';
import Config from './chatbot/config.js';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/messageParser.js';
import './chat.css';
import {Card, CardBody} from "reactstrap";
function Chat() {
    return (
        <div className="row justify-content-center">
           <Card className="mt-5 col-12 col-md-4 items">
               <h1 className="title-mt-5">Let's Chat</h1>
               <CardBody>
                    <div className="message_container" style={{maxWidth:"300px"}}>
                        <Chatbot config={Config} 
                        actionProvider={ActionProvider} 
                        messageParser={MessageParser}/>
                    </div>
               </CardBody>
           </Card>
            
        </div>
    )
}

export default Chat
