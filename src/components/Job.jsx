import React, {useRef, useEffect} from "react";
import '../styles/Job.css'


const Job = ()=> {
    const refTitle = useRef();
    const refJobs = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries,obs)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                    obs.unobserve(entry.target);
                }
            });
        },{threshold:0.3});
        if(refTitle.current) observer.observe(refTitle.current);
        if(refJobs.current) observer.observe(refJobs.current);
    },[]);

    const jobs = [
        {title:'WappMail',description:'WappMail is a massive sending platform for whatsapp and email campaigns. I build it with Typescript, React and Tailwind',time:'3 month',link:'https://wappmail.netlify.app/'},
        {title:'TalentoTech',description:'This site was build to achive the frontend developer certification. Frontend Vanilla',time:'1 month',link:'https://matiasrevetria.github.io/RevetriaTalentoTech/'},
        {title:'Portfolio',description:'My personal portfolio build with React and bootstrap',time:'1 month',link:''},            {title:'React final project', description:'This is an ecommerce build with react and bootstrap. The backend is simulated using mockapi to get, create and edit the products',time:'2 month', link:'https://proyecto-final-revetria-2025-react.netlify.app/'}
        ]

    return(
    <>
    <div className="main-container">
        <div className="first-container appear-y" ref={refTitle}>
            <h1>Jobs</h1>
        </div>
        <div className="row_row-cols-2" >
            <div className="jobs-container appear-x" ref={refJobs}>
                {jobs.map((job,index)=>(
                    <a href={job.link}>
                        <button className="job-card" key={index}>
                        <h1>{job.title}</h1>
                        <p>{job.description}</p>
                        <p>{job.time}</p>
                    </button>
                    </a>
                ))}
            </div>
    </div>
    </div>
    </>
    )
}

export default Job;