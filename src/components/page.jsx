import React from 'react';
import Header from './header';
import MainContent from './mainContent';
import Carousel from './carousel';
import styled from '@emotion/styled';
import Ratings from './ratings';
import Slider from './slider';

const Wrapper = styled.div`
  padding: 145px 0 20px;
  position: relative;
  min-height: 293px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 32px;
  gap: ${(props) => props.gap || '0'};
`;

const Home = () => {
  return (
    <main>
      <Header />
      <Wrapper>
        <Content>
          <MainContent />
          <Carousel />
          <FlexData gap="2rem">
            <Ratings />
            <Slider />
          </FlexData>
        </Content>
      </Wrapper>
    </main>
  );
};

export default Home;
