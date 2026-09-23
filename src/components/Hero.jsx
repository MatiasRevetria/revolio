import { useEffect, useRef } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/HeroStyles.css';
import yo from '../assets/yo3.jpg';

const Hero = () => {
    const { copy } = usePreferences();
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
        return () => observer.disconnect();
    },[])
    
    return(
        <div className="main-container container-md">

            <div id="hero-container">
                <div id="box1" ref={refBox1} className="appear-x">
                    <div>{copy.hero.availability}</div>
                    <div><h1 className="text-1">{copy.hero.title}</h1></div>
                    <div className="text-container"><p>{copy.hero.description}</p></div>
                </div>
                <div id="box2" ref={refBox2} className="appear">
                    <img src={yo} alt={copy.hero.imageAlt}/>
                </div>
            </div>

        </div>
    )
}

export default Hero
