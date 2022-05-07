import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const LINKS = ['How does it works?', 'Solutions', 'Pricing', 'Tools', 'Acadmy'];

const Container = styled.ul`
  padding: 8px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const dynamicStyles = (props) => css`
  & a {
    color: ${props.color};
  }
  & > a:hover {
    color: ${props.colorHover};
  }
`;

const Navlink = styled.li`
  text-decoration: none;
  list-style-type: none;
  transition: color 0.2s linear;
  display: inline-block;
  position: relative;
  padding-bottom: 35px;
  padding-top: 35px;
  margin-left: 10px;
  cursor: pointer;
  font: 500 15px Poppins, sans-serif;

  ,
  & > a {
    color: ${(props) => props.color};
    position: relative;
    outline: none;
    &:after {
      position: absolute;
      content: '';
      bottom: -5px;
      left: 0;
      height: 1px;
      background: ${(props) => props.color};
      width: 100%;
      transform: scaleX(0);
      transform-origin: right;
      -o-transition: 0.3s;
      -ms-transition: 0.3s;
      -moz-transition: 0.3s;
      -webkit-transition: 0.3s;
      transition: 0.3s ease transform;
    }
  }
  & > a:hover {
    color: ${(props) => props.colorHover};
    &:after {
      transform: scaleX(100%);
      transform-origin: left;
    }
  }
`;

const Navbuttons = () => {
  const theme = useTheme();
  return (
    <Container>
      {LINKS.map((link) => (
        <Navlink color={theme.colors.text} colorHover={theme.colors.primary}>
          <a
            href="/"
            css={css`
              display: inline-block;
            `}
          >
            {link}
          </a>
        </Navlink>
      ))}
    </Container>
  );
};

export default Navbuttons;
