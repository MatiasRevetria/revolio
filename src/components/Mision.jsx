import React, {useRef, useEffect} from "react";
import '../styles/Mision.css'

const Mision = ()=>{
    const refArticle = useRef();
    const refSkills = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries,obs)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting){
                        entry.target.classList.add('show');
                        obs.unobserve(entry.target);
                    }
                });
            },
        {thershold: 0.3}
    );
    if (refArticle.current) observer.observe(refArticle.current);
    if (refSkills.current) observer.observe(refSkills.current);
    },[]);

    return (
        <>
        <div className="mision-container container-md">
            <section id="mision-article" ref={refArticle} className="appear-y">
                
            <h2>My mission is to assist people, startups and enterprises design and develop innovative, reliable, engaging and user-friendly software solutions </h2>
            </section>
            <section id="skills" ref={refSkills} className="appear-x">
            <div id="left-mision">
                <h1>HOW CAN I HELP YOU?</h1>
            </div>
            <div id="right-mision" className="row row-cols-2">
                <div className="col">
                    <h2>Frontend Development</h2>
                    Attractive, fast, and adaptable interfaces that offer a fluid user experience on any device.
                </div>
                <div className="col">
                    <h2>Backend Development</h2>
                    Robust and secure architectures that guarantee the performance, scalability, and reliability of your applications. 
                </div>
                <div className="col">
                    <h2>Full-Stack Development</h2>
                    Complete solutions that integrate the interface and internal logic, optimizing every layer of the system.
                </div>
                <div className="col">
                    <h2>API Development</h2>
                    Secure, scalable, and well-documented APIs for fast and reliable integrations.
                </div>
            </div>
            </section>
        </div>
        </>
    );
}

export default Mision