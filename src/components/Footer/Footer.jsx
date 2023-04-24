// import '../Footer/footer.css';
import '../../styles/style.css';
import sprite from '../../images/symbol-defs.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials-list">
        {/* <li className="footer-socials-list__item">
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </li> */}
        <li className="footer-socials-list__item">
          <a href="{instagram} " className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </li>
        <li className="footer-socials-list__item">
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-twitter'}></use>
            </svg>
          </a>
        </li>
        <li className="footer-socials-list__item">
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-linkedin2'}></use>
            </svg>
          </a>
        </li>
        <li className="footer-socials-list__item">
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p className="footer__year">© 2023 frontend-dev.com</p>
    </footer>
  );
};
