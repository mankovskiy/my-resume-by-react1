// import '../Footer/footer.css';
import '../../styles/style.css';
import sprite from '../../images/symbol-defs.svg';
import { FooterStyle, FlexList, SocialsItem } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <FlexList>
        <SocialsItem>
          <a href="{instagram} " className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-twitter'}></use>
            </svg>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-linkedin2'}></use>
            </svg>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a href="{}" className="footer-socials-list__link">
            <svg className="footer-socials-list__icon" width="38" height="38">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
        </SocialsItem>
      </FlexList>
      <p className="footer__year">© 2023 frontend-dev.com</p>
    </FooterStyle>
  );
};
