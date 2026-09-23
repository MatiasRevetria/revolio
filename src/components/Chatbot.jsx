import { useEffect, useRef, useState } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);
  const { copy } = usePreferences();

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleQuestion = (optionIndex) => {
    setMessages((current) => [
      ...current,
      { from: 'user', optionIndex },
      { from: 'bot', optionIndex },
    ]);
  };

  return (
    <section className="chatbot-section" aria-labelledby="chatbot-title">
      <div className="chatbot-heading">
        <span>{copy.chat.kicker}</span>
        <h2 id="chatbot-title">{copy.chat.title}</h2>
      </div>

      <div className="chatbot-container">
        <div className="chatbot-window" aria-live="polite">
          <div className="chatbot-status">
            <span /> {copy.chat.available}
          </div>

          {messages.length === 0 ? (
            <div className="chatbot-empty">
              <span>{copy.chat.start}</span>
              <h3>{copy.chat.greeting}</h3>
              <p>{copy.chat.empty}</p>
            </div>
          ) : (
            <div className="chatbot-messages" ref={messagesRef}>
              {messages.map((message, index) => (
                <p key={`${message.from}-${index}`} className={`chat-message ${message.from}`}>
                  {message.from === 'user'
                    ? copy.chat.options[message.optionIndex].question
                    : copy.chat.options[message.optionIndex].answer}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="chatbot-options">
          <span className="chatbot-label">{copy.chat.askAbout}</span>
          <div className="chatbot-option-list">
            {copy.chat.options.map((option, index) => (
              <button type="button" key={option.question} onClick={() => handleQuestion(index)}>
                <span>0{index + 1}</span>
                {option.question}
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
