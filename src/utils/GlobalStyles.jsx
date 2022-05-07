import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  const styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
    }

    html,
    body {
      height: 100%;
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      font: 400 16px/26px Poppins, sans-serif;
      letter-spacing: 0;
      color: #323537;
      width: 100%;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    #root,
    #__next {
      isolation: isolate;
    }

    a {
      text-decoration: none;
    }
  `;
  return <Global styles={styles} />;
};

export default GlobalStyles;
