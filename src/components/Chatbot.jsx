import React, { useState } from "react";
import '../styles/Chatbot.css'

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const options = [
        {question:"Who are you?", answer:"I'm Matías Revetria, a full stack developer and senior Computer Engineering student."},
        {question:"What technologies do you use?",answer:"I work with Javascript/Typescript, Node.js, Express, React, Bootstrap, EmailJS, and more."},
        {question:"Work experience?", answer:"I work at IsCoders building custom solutions for web apps since 2024 and I also do freelance projects like this portfolio to continue improving my skills."}
    ]
};

export default Chatbot;