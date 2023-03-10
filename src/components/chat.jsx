import React from "react";
import "./components.css";
import image from "/Users/omachrekar/My Work/TSEC Hacks 2k23/tsechacks/src/assets/helper.png";
import { useState, useRef } from "react";

function Chat() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Jan 19 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; // display the message
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Treasure";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "Where I can find schemes |where I can find schemes| Where i can find schemes| Where I can find schemes? |where I can find schemes?| Where i can find schemes?",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "You can find schemes under so and so";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner3 = [
      "Where I can find blogs| I need blogs to read| blogs to read| I need blogs| need blogs| where I can find blogs| i need blogs to read| blogs to read| i need blogs| need blogs",
    ];
    let words52 = new RegExp(owner3);
    if (words52.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Blogs can be found at so and so";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
let owner4 = [
      "good soothing music| Good Music| good music|Good music|sooothing music| Soothing music please| play ssoothing music| soothing music play|play music relax",
    ];
    let words55 = new RegExp(owner4);
    if (words55.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "https://www.youtube.com/watch?v=d8ZKqVYQw4M";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

let owner5 = [
      "how to feel good| How to feel good?",
    ];
    let words63 = new RegExp(owner5);
    if (words63.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Take a deep breath. Meet friends. Sit with family, talk to them. Go for a walk. Listen Music. Watch comedy movie.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

let owner6 = [
      "tell me ajoke| tell me a joke| tell a joke| tell joke| tell joke me|tell me joke|joke please|joke",
    ];
    let words62 = new RegExp(owner6);
    if (words62.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "What did the snail who was riding on the turtle's back say? Wheeeee!";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

let owner7= [
      "help| i need hellp| i want help| help need",
    ];
    let words58 = new RegExp(owner7);
    if (words58.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Call your caretaker immediately.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

// let owner8 = [
//       "function in python",
//     ];
//     let words78 = new RegExp(owner8);
//     if (words78.test(document.querySelector("#input").value)) {
//       getBotMessage.innerText = "Typing...";
//       setTimeout(() => {
//         getBotMessage.innerText =
//           "A function is a block of code which is executed only when a call is made to the function. def keyword is used to define a particular function.Syntax:def function():";
//         inputRef.value = ""; // clear the input
//       }, 2000);
//     }

// let owner9 = [
//       "built-in data types in python",
//     ];
//     let words68 = new RegExp(owner9);
//     if (words68.test(document.querySelector("#input").value)) {
//       getBotMessage.innerText = "Typing...";
//       setTimeout(() => {
//         getBotMessage.innerText =
//          "Immutable data types: Number,String,Tuple Mutable data types:List,Dictionary,Set";
//         inputRef.value = ""; // clear the input
//       }, 2000);
//     }
  
// let owner10 = [
//       "is python case sensitive",
//     ];
//     let words70 = new RegExp(owner10);
//     if (words70.test(document.querySelector("#input").value)) {
//       getBotMessage.innerText = "Typing...";
//       setTimeout(() => {
//         getBotMessage.innerText =
//          "Yes, Python is a case sensitive language. This means that Function and function both are different in pythons like SQL and Pascal.";
//         inputRef.value = ""; // clear the input
//       }, 2000);
//     }

// let owner11= [
//       "how can you comment multiple lines in python, all the line should be prefixed by #.",
//     ];
//     let words50 = new RegExp(owner11);
//     if (words50.test(document.querySelector("#input").value)) {
//       getBotMessage.innerText = "Typing...";
//       setTimeout(() => {
//         getBotMessage.innerText =
//          "Yes, Python is a case sensitive language. This means that Function and function both are different in pythons like SQL and Pascal.";
//         inputRef.value = ""; // clear the input
//       }, 2000);
//     }

//     let ageAsk = [
//       "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
//     ]; //adding the age-question
//     let words11 = new RegExp(ageAsk);
//     if (words11.test(document.querySelector("#input").value)) {
//       // if the input contains some question
//       getBotMessage.innerText = "Typing...";
//       setTimeout(() => {
//         getBotMessage.innerText = "I am 1 year old";
//         inputRef.value = ""; // clear the input
//       }, 2000);
//     }
    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="Chat" onLoad={checkStatus}>
      <h1 className="center">Chat for help!</h1>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">Help me!</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
