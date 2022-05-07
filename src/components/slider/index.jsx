import React from 'react';
import styled from '@emotion/styled';
import useInterval from '../../utils/useSetInterval';
import arrowRight from '../../images/arrowRight.png';
import arrowLeft from '../../images/arrowLeft.png';
import {
  Container,
  ImageWrapper,
  RelativeContainer,
  SectionCarousel,
  classes,
} from './sliderComponents';

import { REVIEW_CARDS } from '../../utils/constants';

// if card es after 3rd place, it's not displayed
// on rightArrow click the first card goes to the bottom
// on leftARrow click the last card goes to the top

const Slider = () => {
  const [imgClasses, setImgClasses] = React.useState(classes);
  useInterval(() => handleSlideChange(), 4000);

  const handleSlideChange = (direction) => {
    const cloneClasses = [...imgClasses];
    if (direction === 'right') {
      const lastItem = cloneClasses.pop();
      const newClasses = [lastItem, ...cloneClasses];
      return setImgClasses(newClasses);
    }
    const first = cloneClasses.splice(0, 1);
    const newClasses = [...cloneClasses, first];
    return setImgClasses(newClasses);
  };

  return (
    <Container>
      <RelativeContainer>
        <ArrowLeft onClick={handleSlideChange} />
        <ArrowRight onClick={handleSlideChange} />
        <SectionCarousel>
          {REVIEW_CARDS.map((src, i) => {
            console.log('classes[i]: ', imgClasses[i]);
            return (
              <ImageWrapper key={src}>
                <img
                  src={src}
                  alt={`review card ${i}`}
                  className={`slide ${imgClasses[i]}`}
                />
              </ImageWrapper>
            );
          })}
        </SectionCarousel>
      </RelativeContainer>
    </Container>
  );
};

export default Slider;

const ArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  cursor: pointer;
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  z-index: 10;
  user-select: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s ease;
`;

const ArrowRight = ({ onClick }) => (
  <ArrowContainer left="20%" onClick={() => onClick('right')} className="arrow">
    <img src={arrowRight} alt="arrow right" />
  </ArrowContainer>
);
const ArrowLeft = ({ onClick }) => (
  <ArrowContainer right="20%" onClick={() => onClick('left')} className="arrow">
    <img src={arrowLeft} alt="arrow left" />
  </ArrowContainer>
);
