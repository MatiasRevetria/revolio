import React from "react";
import '../styles/Job.css'

const jobs = [
    {title:'WappMail',description:'WappMail is a massive sending platform for whatsapp and email campaigns. I build it with Typescript, React and Tailwind',time:'3 month'},
    {title:'TalentoTech',description:'',time:'1 month'},
    {title:'WappMail',description:'This is a website that i have build for a frontend course. Its done with frontend Vanilla',time:'1 month'},
    {title:'Portfolio',description:'My personal portfolio build it with React and bootstrap',time:'1 month'}
]

const Job = ()=> {

    return(
    <>
    <div className="main-container">
        <div className="first-container">
            <h1>Jobs</h1>
        </div>
        <div className="jobs-container">
        {jobs.map((job,index)=>(
            <div className="job-card" key={index}>
                <h1>{job.title}</h1>
                <p>{job.description}</p>
                <p>{job.time}</p>
            </div>
        ))}
    </div>
    </div>
    </>
    )
}

export default Job;