import React from 'react';
import styled from '@emotion/styled';
import { Container } from './mainContent';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { images } from '../utils/constants';

export const Subtitle = styled.h2`
  font-weight: 700;
  text-align: start;
  line-height: 40px;
  font-size: 30px;
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
`;

//image-gallery-icon image-gallery-left-nav
const GalleryContainer = styled.div`
  color: red !important;
  & .image-gallery-icon {
    color: #51ad5a;
    filter: none;
  }
  & .image-gallery-left-nav {
    left: -50px;
  }
  & .image-gallery-right-nav {
    right: -50px;
  }
  & .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    width: 70px;
    height: 70px;
  }
  &.image-gallery-icon:hover .image-gallery-svg {
    transform: none;
    transition: none;
  }
  @media (hover: hover) and (pointer: fine) .image-gallery-icon:hover {
    color: #337ab7;
  }
  @media (hover: hover) and (pointer: fine) .image-gallery-icon:hover {
    color: #337ab7;
  }
  @media (hover: hover) and (pointer: fine) {
    &.image-gallery-icon:hover {
      color: #51ad5a !important;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Subtitle>
        Trusted by 20,000+ businesses & compatible with over 100+ platforms
      </Subtitle>
      <GalleryContainer>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          useBrowserFullscreen={false}
          showThumbnails={false}
        />
      </GalleryContainer>
    </Container>
  );
};

export default Carousel;
