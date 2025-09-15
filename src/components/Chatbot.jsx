import React, { useState } from "react";
import '../styles/Chatbot.css'
import { Form } from "react-router-dom";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const options = [
        {question:"Who are you?", answer:"I'm Matías Revetria, a full stack developer and senior Computer Engineering student."},
        {question:"What technologies do you use?",answer:"I work with Javascript/Typescript, Node.js, Express, React, Bootstrap, and more."},
        {question:"Work experience?", answer:"I work at IsCoders building custom solutions for web apps since 2024 and I also do freelance projects like this portfolio to continue improving my skills."}
    ];

    const handleQuestion = (option) => {
        setMessages((prev) => [
            ...prev,
            {from: 'user', text:option.question},
            {from: 'bot', text: option.answer}
        ]);
    };

    return (
        <>
         <div className="chatbot-container">
            <div className="chatbot-window">
                {messages.map((msg,index)=>(
                    <button key={index} className={`chat-message ${msg.from}`}>
                        {msg.text}
                    </button>
                ))}
            </div>
            <div className="chatbot-options">
                {options.map((option,index)=>(
                    <button key={index} onClick={()=> handleQuestion(option)}>
                        {option.question}
                    </button>
                ))
                }
            </div>
         </div>
        </>
    )
};

export default Chatbot;