import React,{useState} from "react";
import ChatForm from './ChatForm';
import  './ChatBot.css';

const chatBot = () => {
   
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  }; 
 

  return (
    <>
    <div>
      <div className="container" style={{marginTop:"180px"}}>
        <div style={{ display: showChat ? "" : "none" }}>
          <ChatForm></ChatForm>
        </div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            Click to chat...{" "}
          </button>
        ) : (
          <button className="btn2" onClick={() => hideChat()}>
            Click to hide...{" "}
          </button>
        )}
      </div>
      </div>
    </>
  );
  
};

export default chatBot;



