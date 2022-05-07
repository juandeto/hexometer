/** @jsx jsx */
import React from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
const theme = {
  colors: {
    primary: '#51AD5A',
    text: '#323537',
    white: '#FFF',
  },
  shadow: ['0 20px 30px 0 rgba(12,0,46,.1)'],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <>{children}</>
  </ThemeProvider>
);

export default Theme;
