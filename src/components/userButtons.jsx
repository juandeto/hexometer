import React from 'react';
import ButtonPrimary from './buttonPrimary';
import styled from '@emotion/styled';

const LoginButton = styled.button`
  position: relative;
  border: none;
  padding: 12px 16px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0;
  letter-spacing: 0.05rem;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  background: none;
  transition: all 0.2s linear;
  padding: 8px 15px !important;
  text-align: center;
  border-radius: 45px;
  border: 0;
  font: 500 16px Poppins, sans-serif;
`;

const UserButtons = () => {
  return (
    <div>
      <ButtonPrimary onClick={() => null}>Get Started for Free</ButtonPrimary>
      <LoginButton>Login</LoginButton>
    </div>
  );
};

export default UserButtons;
