import React, { useEffect, useRef } from "react";
import '../styles/HeroStyles.css'
import yo from'../assets/yo3.jpg'

const Hero = () => {
    const refBox1 = useRef();
    const refBox2 = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries,obs)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting){
                        entry.target.classList.add("show");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.3}
        );
        if (refBox1.current) observer.observe(refBox1.current);
        if (refBox2.current) observer.observe(refBox2.current);
    },[])
    
    return(
        <div className="main-container">

            <div id="hero-container">
                <div id="box1" ref={refBox1} className="appear-x">
                    <div style={{color:'green'}}>AVAILABLE FOR WORK</div>
                    <div><h1 className="text-1">Hi, I'm a Software Engineer</h1></div>
                    <div className="text-container"><p>I'm Matias, a senior Computer Engineering student currently completing the final courses of my degree. For the past five years, I've been dedicated to creating smart solutions to complex problems, applying all the knowledge I've gained both as a student and as a developer. I'm constantly learning and gaining new experiences to further improve my work as a software engineer.</p></div>
                </div>
                <div id="box2" ref={refBox2} className="appear">
                    <img src={yo} alt="yo"/>
                </div>
            </div>

        </div>
    )
}

export default Hero