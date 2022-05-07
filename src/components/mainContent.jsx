import React from 'react';
import styled from '@emotion/styled';
import ButtonPrimary from './buttonPrimary';
import Hero from '../images/hero1.png';

const Wrapper = styled.div`
  padding: 145px 0 20px;
  position: relative;
  min-height: 293px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Title1 = styled.h1`
  font-weight: 700;
  text-align: start;
  line-height: 50px;
  font-size: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  text-align: start;
  line-height: 30px;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const MainContent = () => {
  return (
    <>
      <Title1>Beyond page speed|</Title1>
      <FlexBox>
        <Container>
          <Subtitle>
            Meet Hexometer, your AI sidekick that works 24/7 to catch problems
            before they affect your business.
          </Subtitle>
          <ButtonPrimary onClick={() => null} padding="14px 42px">
            Get started with our free plan
          </ButtonPrimary>
          <Paragraph>
            Every day your website can face an increasing range of threats.
            Server problems, slow landing pages, broken links, frustrating
            mobile experiences, embarrassing spelling mistakes, changing SEO
            rules, 3rd party services breaking, or security issues that put your
            business at risk.
          </Paragraph>
          <Paragraph>
            To make matters worse, these issues can linger unnoticed, wasting
            your ad-budget and costing your business lost sales.
          </Paragraph>
          <Paragraph>
            Hexometer monitors your website 24/7, to catch Availability,
            Performance, User experience, SEO, Health and Security problems,
            before they affect your customers.
          </Paragraph>
        </Container>
        <Container>
          <img src={Hero} />
        </Container>
      </FlexBox>
    </>
  );
};

export default MainContent;
