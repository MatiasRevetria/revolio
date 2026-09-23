import { useEffect, useRef, useState } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/Contact.css';

const Contact = () => {
  const { copy } = usePreferences();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const ref = useRef(null);

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
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const updateField = (setter, field) => (event) => {
    setter(event.target.value);
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!name.trim()) validationErrors.name = 'name';
    if (!email.trim()) validationErrors.email = 'email';
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) validationErrors.email = 'invalidEmail';
    if (!message.trim()) validationErrors.message = 'message';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const whatsappMessage = [
      copy.contact.whatsappIntro,
      '',
      `${copy.contact.whatsappName}: ${name.trim()}`,
      `${copy.contact.whatsappEmail}: ${email.trim()}`,
      '',
      `${copy.contact.whatsappMessage}:`,
      message.trim(),
    ].join('\n');

    const whatsappUrl = `https://wa.me/5491138677999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact-container" ref={ref} className="appear">
      <div className="contact-intro">
        <span className="contact-kicker">{copy.contact.kicker}</span>
        <h2>{copy.contact.titleLineOne}<br />{copy.contact.titleLineTwo}</h2>
        <p>
          {copy.contact.description}
        </p>

        <div className="contact-actions">
          <a href="mailto:revetriamatias@icloud.com" className="contact-action">
            <span className="contact-action-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 6.5h18v11H3z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <span>
              <small>{copy.contact.email}</small>
              revetriamatias@icloud.com
            </span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://wa.me/5491138677999"
            className="contact-action"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-action-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 19.7l1.1-4A8 8 0 1 1 20 11.6Z" />
                <path d="M9 8.5c.3 2.8 2.7 5.2 5.5 5.5" />
              </svg>
            </span>
            <span>
              <small>{copy.contact.whatsapp}</small>
              +54 9 11 3867 7999
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="contact-form-card">
        <div className="contact-form-heading">
          <span>{copy.contact.formTitle}</span>
          <span>{copy.contact.replyTime}</span>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="contact-form-row">
            <label className="contact-field">
              <span>{copy.contact.nameLabel}</span>
              <input
                type="text"
                value={name}
                onChange={updateField(setName, 'name')}
                placeholder={copy.contact.namePlaceholder}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                name="name"
              />
              {errors.name && <small id="name-error" className="contact-error">{copy.contact.errors[errors.name]}</small>}
            </label>

            <label className="contact-field">
              <span>{copy.contact.emailLabel}</span>
              <input
                type="email"
                value={email}
                onChange={updateField(setEmail, 'email')}
                placeholder={copy.contact.emailPlaceholder}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                name="email"
              />
              {errors.email && <small id="email-error" className="contact-error">{copy.contact.errors[errors.email]}</small>}
            </label>
          </div>

          <label className="contact-field">
            <span>{copy.contact.messageLabel}</span>
            <textarea
              value={message}
              onChange={updateField(setMessage, 'message')}
              placeholder={copy.contact.messagePlaceholder}
              rows={6}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              name="message"
            />
            {errors.message && <small id="message-error" className="contact-error">{copy.contact.errors[errors.message]}</small>}
          </label>

          <button type="submit" className="contact-submit">
            <span>{copy.contact.submit}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
