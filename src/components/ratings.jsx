import React from 'react';
import styled from '@emotion/styled';
import RatingItem from './ratingItem';
import { RATINGS_ITEMS } from '../utils/constants';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  padding: 8px;
`;

const Ratings = () => {
  return (
    <Container>
      {RATINGS_ITEMS.map((item) => (
        <RatingItem key={item.alt} {...item} />
      ))}
    </Container>
  );
};

export default Ratings;
