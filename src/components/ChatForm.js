import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        // headerTitle="Chat Help"
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}! What is your gender?",
            trigger: "gender",
          },
          {
            id: "gender",
            options: [
              { value: "male", label: "Male", trigger: "21" },
              { value: "female", label: "Female", trigger: "5" },
            ],
          },

          {
            id: "21",
            message:
              "Hey! This ChatBot is all about diets and health related. Are you interested to know about this. ",
            trigger: "male",
          },

          {
            id: "male",
            options: [
              { value: "YES", label: "YES", trigger: "22" },
              { value: "NO", label: "NO", trigger: "23" },
            ],
          },
          {
            id: "23",
            message: "Okay cool. Have a great day! ",
            end: true,
          },

          {
            id: "22",
            message:
              "Talking about diets: This are the diets you must include: 1. Water 2.Fruits 3.Leafy green vegetables 4. Ginger 5.Chicken 6.Fish 6.Turmeric 8.Dark Chocolates 9.Nuts 10.Yogurt  And Foods that you need to avoid: 1.Coffee 2.Alcohol 3.Spicy Food 4.Salt and Sugar: Intake in limited amount. Yeah so these are the tips you have to follow!✌🏻 Cramps: Here are some things that help ease cramps: 1.Exercise. 2.Putting a heating pad on your belly or lower back. 3.Taking a hot bath. 4.Having an orgasm (by yourself or with a partner). 5.Rest.  So Yeah this are the technique that help to give relaxation from the cramps. So yeah in this way you can take care of you loved ones :) ",
            trigger: "sol2",
          },
          {
            id: "sol2",
            options: [
              { value: "YES", label: "ThankYou!", end: true },
              { value: "NO", label: "This means Alot", end: true },
            ],
          },

          {
            id: "5",
            message: "How old are you?",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "11",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 0) {
                return "value must be positive";
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },

          {
            id: "11",
            message: "Are you on your periods?",
            trigger: "period",
          },
          {
            id: "period",
            options: [
              { value: "YES", label: "YES", trigger: "12" },
              { value: "NO", label: "NO", trigger: "31" },
            ],
          },

          {
            id: "31",
            message:
              "Okay so Hey! This ChatBot is all about diets and how to get rid of period cramps for women. So do you want to know more about?",
            trigger: "period",
          },

          {
            id: "12",
            message: "Worrying About diet? Like what to take what not?",
            trigger: "diet",
          },
          {
            id: "diet",
            options: [
              { value: "YES", label: "YES", trigger: "13" },
              { value: "NO", label: "NO", trigger: "14" },
            ],
          },

          {
            id: "13",
            message:
              "So, do not worry about! here I am to help you :) This are the diets you must include: 1. Water 2.Fruits 3.Leafy green vegetables 4. Ginger 5.Chicken 6.Fish 6.Turmeric 8.Dark Chocolates 9.Nuts 10.Yogurt  And Foods that you need to avoid: 1.Coffee 2.Alcohol 3.Spicy Food 4.Salt and Sugar: Intake in limited amount. Yeah so these are the tips you have to follow!✌🏻",
            trigger: "sol",
          },
          {
            id: "sol",
            options: [
              { value: "YES", label: "ThankYou!", trigger: "14" },
              { value: "NO", label: "This means Alot", trigger: "14" },
            ],
          },

          {
            id: "14",
            message:
              "Are you feeling frustrated or irritated due to period cramps?",
            trigger: "cramps",
          },
          {
            id: "cramps",
            options: [
              { value: "YES", label: "YES", trigger: "15" },
              { value: "NO", label: "NO", trigger: "16" },
            ],
          },

          {
            id: "15",
            message:
              "Here are some things that help ease cramps: 1.Exercise. 2.Putting a heating pad on your belly or lower back. 3.Taking a hot bath. 4.Having an orgasm (by yourself or with a partner). 5.Rest.  So Yeah this are the technique that help to give relaxation from the cramps.",
            trigger: "sol1",
          },

          {
            id: "sol1",
            options: [
              { value: "YES", label: "ThankYou!", trigger: "16" },
              { value: "NO", label: "This means Alot", trigger: "16" },
            ],
          },

          {
            id: "16",
            message:
              "Want to know about the medications that relax you from the period cramps?",
            trigger: "periodcramps",
          },
          {
            id: "periodcramps",
            options: [
              { value: "YES", label: "YES", trigger: "17" },
              { value: "NO", label: "NO", trigger: "final" },
            ],
          },

          {
            id: "17",
            message:
              "First and the foremost tip is never take medications without consulting to your doctor. Okay so here i mentioned some medicine that we can take is an anti-inflammatory medication. Ibuprofen (Advil, Motrin), ketoprofen (Orudis), and naproxen (Aleve, Naprosyn) are available without a prescription and are effective at blocking the effects of prostaglandins. So this I found on Internet but suggest you to talk to your doctor first.",
            trigger: "final",
          },

          {
            id: "final",
            message:
              "Okay so I hope this QNA wil help you in someway. Have a happy and calm days ahead :)",
            end: true,
          },
        ]}
      />
    
    );
  }
  
}

export default SimpleForm;
