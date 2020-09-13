import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./chatbotComponent/option";
import Ans from "./chatbotComponent/ansOption";
const config = {
  botName: "Hospital Guide",
   customStyles: {
    botMessageBox: {
      backgroundColor: "#11BD02"
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hello. Please give your description`, {
      widget: "options",
    }),
  ],
   widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "answers",
        widgetFunc: (props)=><Ans {...props}/>,
      }
   ],
};

export default config;