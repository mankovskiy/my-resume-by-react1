import styled from '@emotion/styled';

export const FooterStyle = styled.footer`
  padding-top: 60px;
  padding-bottom: 50px;
  background-color: var(--dark-main-color);
`;

export const FlexList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SocialsItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
