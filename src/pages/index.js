import * as React from 'react';
import Theme from '../utils/ThemeProvider';
import Page from '../components/page';
import GlobalStyles from '../utils/GlobalStyles';

const IndexPage = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Page />
    </Theme>
  );
};

export default IndexPage;
