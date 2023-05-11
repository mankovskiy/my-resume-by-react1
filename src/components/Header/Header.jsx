import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/style.css';
import moon from '../../images/moon.svg';
import white from '../../images/white.svg';
import { Container } from 'components/App.styled';
import {
  HeaderBCG,
  BotomLine,
  NavFlexWrap,
  NavList,
  NavItem,
  NavBurger,
  NavBurgerBar,
  ThemeBtn,
  ThemeIcon,
  Links,
} from './Header.styled';

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
    <HeaderBCG>
      <BotomLine>
        <Container>
          <NavFlexWrap>
            <Link to="/" className="nav__icon">
              <span className="nav__icon nav__icon--left">Freelancer </span>
              portfolio
            </Link>
            <NavList>
              <NavItem>
                <Links to="/">Home</Links>
              </NavItem>
              <NavItem>
                <Links to="/projects">Projects</Links>
              </NavItem>
              <NavItem>
                <Links to="/skills">Skills</Links>
              </NavItem>
              <NavItem>
                <Links to="/contacts">Contacts</Links>
              </NavItem>
            </NavList>
            <NavBurger onClick={onClickHamburgerMenu}>
              <NavBurgerBar></NavBurgerBar>
              <NavBurgerBar></NavBurgerBar>
              <NavBurgerBar></NavBurgerBar>
            </NavBurger>
            <ThemeBtn type="button" onClick={onThemeToggle}>
              <ThemeIcon src={white} alt="" />
              <ThemeIcon src={moon} alt="" />
            </ThemeBtn>
          </NavFlexWrap>
        </Container>
      </BotomLine>
    </HeaderBCG>
  );
};
