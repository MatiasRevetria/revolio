import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import '../styles/Contact.css'
import { toast , Bounce } from "react-toastify";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [txtArea, setTxtArea] = useState('');
    const [error, setError] = useState({});
    const ref = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries,obs)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                    obs.unobserve(entry.target);
                }
            });
        },{threshold:0.3}
    );
    if (ref.current) observer.observe(ref.current);
    },[]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        let validationErrors = {};
        if (!name.trim()) validationErrors.name = "Don't forget your name";
        if (!email.trim()) validationErrors.email = "Don't forget your email";
        if (!txtArea.trim()) validationErrors.txtArea = "What's going on inside that mind?";

        if(Object.keys(validationErrors).length>0){
            setError(validationErrors);
            return;
        }
        setEmail('');
        setName('');
        setTxtArea('');

        emailjs.sendForm('service_ymftvpx','template_5p5in9p',event.target,'sZdsJ_5-W3PWqst8f')
        .then((result)=>{
            toast.success('Email sent!',{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setName('');
            setEmail('');
            setTxtArea('');
        }).catch((error)=>{
            toast.error('An error has occured',{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.log(error.text);
        });
    };

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
        <div id="contact-container" ref={ref} className=" appear container-md">
            <div id="text">
                <h1>Contact with me to build your dream web site/app</h1>
                <p>Feel free to contact me if you have any question. I'm available for new projects or just chatting.</p>
            </div>
            <div id="contact-form">
            
                <form onSubmit={handleSubmit}>
                    <div id="input-container">
                        <div className="input">
                        <input type="text" value={name} onChange ={handleChangeName} placeholder="Name" aria-invalid={!!error.name} aria-describedby="name-error" name="name"/>
                        {error.name && 
                            <small id="name-error" className="error">
                                {error.name}
                            </small>
                        }
                    </div>
                    <div className="input">
                        <input type="text" value={email} onChange={handleChangeEmail} placeholder="Email" aria-invalid={!!error.email} aria-describedby="email-error" name="email"/>
                        {error.email &&
                            <small id="email-error" className="error">
                                {error.email}
                            </small>
                        }
                    </div>
                    </div>
                    <div id="text-area">
                        <textarea value={txtArea} onChange={handleChangeTxtArea} placeholder="Work description"
                            rows={10} aria-invalid={!!error.txtArea} aria-describedby="message-error" name="message"/>
                                {error.txtArea && 
                                    <small id="message-error" className="error">{error.txtArea}</small>
                                }
                    </div>
                    <button type="submit" className="btn-send">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact