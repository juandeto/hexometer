import React from 'react';
import star from '../images/star.png';
import styled from '@emotion/styled';

const ContainerItem = styled.div`
  padding: 4px;
  width: 50%;
  height: 150px;
`;

const FlexData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || '0'};
`;

const RatingItem = (props) => {
  const { href, alt, rating } = props;
  return (
    <ContainerItem>
      <FlexData gap="1rem">
        <span>
          <img src={href} alt={alt} />
        </span>
        <span>
          <strong>{rating}/5</strong>
        </span>
      </FlexData>
      <FlexData>
        {Array.from({ length: 5 }, (_, i) => (
          <img src={star} alt="star rating" />
        ))}
      </FlexData>
    </ContainerItem>
  );
};

export default RatingItem;
