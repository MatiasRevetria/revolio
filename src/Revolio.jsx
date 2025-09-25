import React from 'react'
import './styles/RevolioStyles.css'
import Nav from './components/Nav'
import Hero from './components/Hero';
import Mision from './components/Mision';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Job from './components/Job';

const Revolio = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Mision/>
    <Job/>
    <Chatbot/>
    <Contact/>
    </>
  );
};

export default Revolio;


