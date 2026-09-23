import { useEffect, useState } from 'react';
import usePreferences from '../hooks/usePreferences';
import '../styles/NavStyles.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { copy, language, theme, toggleLanguage, toggleTheme } = usePreferences();
  const navigation = [
    { label: copy.nav.mission, href: '#mision' },
    { label: copy.nav.projects, href: '#jobs' },
    { label: copy.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav id="nav" aria-label={copy.nav.mainAria}>
        <a className="nav-brand" href="#hero" onClick={closeMenu}>
          Matias<span>.</span>
        </a>

        <button
          className={`nav-toggle${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-controls="nav-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="nav-menu" className={`nav-menu${isOpen ? ' is-open' : ''}`}>
          <div className="nav-menu-header">
            <span>{copy.nav.navigation}</span>
            <button type="button" onClick={closeMenu} aria-label={copy.nav.closeMenu}>
              ×
            </button>
          </div>
          <ul>
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-preferences">
            <button
              type="button"
              className="preference-button language-button"
              onClick={toggleLanguage}
              aria-label={copy.nav.switchLanguage}
              title={copy.nav.switchLanguage}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              type="button"
              className="preference-button theme-button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? copy.nav.switchToDark : copy.nav.switchToLight}
              title={theme === 'light' ? copy.nav.switchToDark : copy.nav.switchToLight}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 14.2A8.2 8.2 0 0 1 9.8 3a9 9 0 1 0 11.2 11.2Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <button
        type="button"
        className={`nav-backdrop${isOpen ? ' is-open' : ''}`}
        aria-label={copy.nav.closeMenu}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </>
  );
};

export default Nav;
