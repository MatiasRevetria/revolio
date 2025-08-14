import React from "react";
import '../styles/Mision.css'

const Mision = ()=>{
    return (
        <>
        <div className="mision-container">
            <section id="mision-article">
            <h2>My mission is to assist people, startups and enterprises design and develop innovative, reliable, engaging and user-friendly software solutions </h2>
            </section>
            <section id="skills">
            <div id="left-mision">
                <h1>HOW CAN I HELP YOU?</h1>
            </div>
            <div id="right-mision" className="row row-cols-2">
                <div className="col d-flex justify-content-center align-items-center">Column</div>
                <div className="col d-flex justify-content-center align-items-center">Column</div>
                <div className="col d-flex justify-content-center align-items-center">Column</div>
                <div className="col d-flex justify-content-center align-items-center">Column</div>
            </div>
            </section>
        </div>
        </>
    );
}

export default Mision