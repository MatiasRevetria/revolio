import React, { useState } from "react";
import '../styles/Contact.css'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [txtArea, setTxtArea] = useState('');
    const [error, setError] = useState({});

    const handleSubmit = (event)=>{
        event.preventDefault();
        let validationErrors = {};
        if (!name.trim()) validationErrors.name = "Don't forget your name";
        if (!email.trim()) validationErrors.email = "Don't forget your email";
        if (!txtArea.trim()) validationErrors.txtArea = "What's going on inside that mind?";

        if(Object.keys(validationErrors.length)>0){
            setError(validationErrors);
            return;
        }
        setEmail('');
        setName('');
        setTxtArea('');
    }

    const handleChangeName = (event)=>{
        setName(event.target.value);
    }
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handleChangeTxtArea = (event)=>{
        setTxtArea(event.target.value);
    }

    return(
        <>
        <div id="contact-container" className="container-md">
            <div id="text">
                <h1>Contact with me to build your dream web app/site</h1>
                <p>Feel free to contact me if you any question. I-m available for new projects or just chatting.</p>
            </div>
            <div id="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <input type="text" value={name} onChange ={handleChangeName} placeholder="Name" aria-invalid={!!error.name} aria-describedby="name-error"/>
                        {error.name && 
                            <small id="name-error" className="error">
                                {error.name}
                            </small>
                        }
                    </div>
                    <div className="input">
                        <input type="text" value={email} onChange={handleChangeEmail} placeholder="Email" aria-invalid={!!error.email} aria-describedby="email-error"/>
                        {error.email &&
                            <small id="email-error" className="error">
                                {error.email}
                            </small>
                        }
                    </div>
                    <div id="text-area">
                        <textarea value={txtArea} onChange={handleChangeTxtArea} placeholder="Work description"
                            rows={6} aria-invalid={!!error.txtArea} aria-describedby="message-error">
                                {error.txtArea && 
                                    <small id="message-error" className="error">{error.txtArea}</small>
                                }
                        </textarea>
                    </div>
                    <button type="submit" className="btn-send">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact