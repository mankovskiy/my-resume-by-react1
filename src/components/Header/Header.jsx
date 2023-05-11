import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/style.css';
import moon from '../../images/moon.svg';
import white from '../../images/white.svg';

const LOCALSTORAGE_KEY = 'ui-theme';

const themeBtn = document.querySelector('.theme-btn');
const hamburgerMenu = document.querySelector('.hamburger');
const mobileNavMenu = document.querySelector('.nav__list');
const bodyDarkTheme = document.querySelector('body');

function onClickHamburgerMenu() {
  hamburgerMenu.classList.toggle('hamburger--active');
  mobileNavMenu.classList.toggle('nav__list--active');
}

export const Header = () => {
  const [themeChange, setThemeChange] = useState('');

  const themeBtn = document.querySelector('.theme-btn');
  const hamburgerMenu = document.querySelector('.hamburger');
  const mobileNavMenu = document.querySelector('.nav__list');
  const bodyDarkTheme = document.querySelector('body');

  function chekLocalStor() {
    const theme = window.localStorage.getItem(LOCALSTORAGE_KEY);
    console.log(theme);
    if (theme === 'dark') {
      setThemeChange('dark');

      bodyDarkTheme.classList.add('dark');
    } else {
      setThemeChange('light');

      bodyDarkTheme.classList.remove('dark');
    }
  }

  function onThemeToggle() {
    themeBtn.classList.toggle('theme-btn--active');

    const isDark = bodyDarkTheme.classList.toggle('dark');
    if (isDark) {
      window.localStorage.setItem(LOCALSTORAGE_KEY, 'dark');
    } else {
      window.localStorage.setItem(LOCALSTORAGE_KEY, 'light');
    }
  }

  useEffect(() => {
    chekLocalStor();
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <Link to="/" className="nav__icon">
              <span className="nav__icon nav__icon--left">Freelancer </span>
              portfolio
            </Link>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link ">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/projects" className="nav__link">
                  Projects
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/skills" className="nav__link">
                  Skills
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contacts" className="nav__link">
                  Contacts
                </NavLink>
              </li>
            </ul>
            <div className="hamburger" onClick={onClickHamburgerMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <button className="theme-btn" type="button" onClick={onThemeToggle}>
              <img src={white} alt="" className="theme-btn__icon" />
              <img src={moon} alt="" className="theme-btn__icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
