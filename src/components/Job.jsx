import { useEffect, useRef } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/Job.css';

const projectLinks = [
    'https://wappmail.netlify.app/',
    'https://goldbeginning.com.ar',
    'https://lapestemarinera.revema.com.ar',
    'https://www.merkansas.com.ar',
    'https://dralourdesmazo.ar',
    '#hero',
];


const Job = ()=> {
    const { copy } = usePreferences();
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
        return () => observer.disconnect();
    },[]);

    const jobs = copy.jobs.projects.map((project, index) => ({
        ...project,
        link: projectLinks[index],
    }));

    return(
    <>
    <div className="main-container">
        <div className="first-container appear-y" ref={refTitle}>
            <h1>{copy.jobs.title}</h1>
        </div>
        <div className="row_row-cols-2" >
            <div className="jobs-container appear-x" ref={refJobs}>
                {jobs.map((job,index)=>(
                    <a href={job.link} key={job.title} target={job.link.startsWith('#') ? undefined : '_blank'} rel={job.link.startsWith('#') ? undefined : 'noreferrer'}>
                        <article className="job-card">
                        <span className="job-number">0{index + 1}</span>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <span className="job-tag">{job.tag}</span>
                        <span className="job-arrow" aria-hidden="true">↗</span>
                    </article>
                    </a>
                ))}
            </div>
    </div>
    </div>
    </>
    )
}

export default Job;
