import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBCG = styled.header`
  background-color: var(--dark-main-color);
`;

export const BotomLine = styled.div`
  border-bottom: 1px solid #26292d;
  letter-spacing: normal;
`;

export const NavFlexWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const NavItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Links = styled(NavLink)`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--white-color);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }

  &.active::after {
    content: '';
    border-radius: 2px;
    position: absolute;
    margin-top: 4px;
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--accent-color);
  }
`;

export const NavBurger = styled.div`
  display: none;
  cursor: pointer;
`;

export const NavBurgerBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--white-color);
`;

export const ThemeBtn = styled.button`
  margin-left: 15px;
  display: flex;
  position: relative;
  width: 51px;
  height: 26px;
  background-color: #272727;
  border-radius: 50px;
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    display: block;
    width: 24px;
    height: 24px;
    background-color: var(--white-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ThemeIcon = styled.img`
  position: relative;
  padding: 5px;
`;
