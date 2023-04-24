import { NavLink, Link } from 'react-router-dom';
import '../../styles/style.css';
import moon from '../../images/moon.svg';
import white from '../../images/white.svg';

export const Header = () => {
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
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <button className="theme-btn" type="button">
              <img src={white} alt="" className="theme-btn__icon" />
              <img src={moon} alt="" className="theme-btn__icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
