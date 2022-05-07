import React from 'react';
import Navbuttons from './Navbuttons';
import UserButtons from './userButtons';
import Logo from '../images/logo.svg';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.header`
  background-image: none;
  background-color: #fff;
  transition: all 0.2s linear;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
`;

const Nav = styled.nav`
  position: relative;
  margin: 0 auto;
  padding: 0.5rem 1rem !important;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1250px) {
    max-width: 1200px;
  }
  ,
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  ,
  @media (min-width: 992px) {
    max-width: 960px;
  }
  ,
  @media (min-width: 768px) {
    max-width: 720px;
  }
  ,
  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="logo hexometer" />
        </Link>
        <Navbuttons />
        <UserButtons />
      </Nav>
    </Container>
  );
};

export default Header;
