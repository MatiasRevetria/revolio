import { useEffect, useRef } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/Mision.css';

const Mision = () => {
  const { copy } = usePreferences();
  const refArticle = useRef(null);
  const refSkills = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (refArticle.current) observer.observe(refArticle.current);
    if (refSkills.current) observer.observe(refSkills.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mision-container">
      <section id="mision-article" ref={refArticle} className="appear-y">
        <span className="mision-kicker">{copy.mission.kicker}</span>
        <h2>
          {copy.mission.text}
          <em>{copy.mission.emphasis}</em>
        </h2>
      </section>

      <section id="skills" ref={refSkills} className="appear-x">
        <div id="left-mision">
          <span>{copy.mission.servicesLabel}</span>
          <h2>{copy.mission.servicesTitle}</h2>
        </div>
        <div id="right-mision">
          {copy.mission.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mision;
