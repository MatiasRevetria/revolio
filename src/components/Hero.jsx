import React from "react";
import '../styles/HeroStyles.css'
import yo from'../assets/yo3.jpg'

const Hero = () => {
    
    return(
        <div className="main-container">

            <div id="hero-container">
                <div>
                    <div style={{color:'green'}}>AVAILABLE FOR WORK</div>
                    <div><h1 className="text-1">Hi, I'm a Software Engineer</h1></div>
                    <div className="text-container"><p>I'm Matias, a senior Computer Engineering student currently completing the final courses of my degree. For the past five years, I've been dedicated to creating smart solutions to complex problems, applying all the knowledge I've gained both as a student and as a developer. I'm constantly learning and gaining new experiences to further improve my work as a software engineer.</p></div>
                </div>
                <div>
                    <img src={yo} alt="yo"/>
                </div>
            </div>

        </div>
    )
}

export default Hero