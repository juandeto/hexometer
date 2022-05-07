import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Button = styled.button`
  position: relative;
  border: none;
  padding: 12px 16px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0;
  letter-spacing: 0.05rem;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  background: ${(props) => props.background};
  color: #fff;
  transition: all 0.2s linear;
  box-shadow: 0 20px 30px 0 rgb(12 0 46 / 10%);
  padding: ${(props) => props.padding};
  text-align: center;
  border-radius: 45px;
  border: 0;
  font: 500 16px Poppins, sans-serif;
  &:hover {
    background: none;
    color: ${(props) => props.background};
  }
`;

const ButtonPrimary = ({ children, onClick, padding = '8px 15px' }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      background={theme.colors.primary}
      padding={padding}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
