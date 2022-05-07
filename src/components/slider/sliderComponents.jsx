import styled from '@emotion/styled';

export const ImageWrapper = styled.span`
  > .slide {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 70px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: -webkit-transform 0.4s ease;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    transition: all 0.4s ease, -webkit-transform 0.4s ease;
  }
  > .right-3 {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translateZ(-250px);
    transform: translateZ(-250px);
    visibility: hidden;
  }
  ,
  > .right-2 {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translateZ(-250px);
    transform: translateZ(-250px);
    visibility: hidden;
  }
  ,
  > .right {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translate3d(-40%,0,-200px);
    transform: translate3d(-40%,0,-200px);
  }
  ,
  > .center {
    box-shadow: 0 13px 26px rgb(0 0 0 / 30%), 0 12px 6px rgb(0 0 0 / 20%);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 9999;
  }
  > .left {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translate3d(40%,0,-200px);
    transform: translate3d(40%,0,-200px);
}

  }
  > .left-2 {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translateZ(-250px);
    transform: translateZ(-250px);
    visibility: hidden;
  }
  > .left-3 {
    box-shadow: 0 6px 10px rgb(0 0 0 / 30%), 0 2px 2px rgb(0 0 0 / 20%);
    -webkit-transform: translateZ(-250px);
    transform: translateZ(-250px);
    visibility: hidden;
  }
`;

export const Container = styled.div`
  width: 50%;
  padding: 8px;
  height: 230px;
`;

export const RelativeContainer = styled.div`
  position: relative;
  height: 100%;
  &:hover > .arrow {
    visibility: visible;
    opacity: 1;
    transition: opacity 1s ease;
  }
`;

export const SectionCarousel = styled.section`
  position: relative;
  width: 60%;
  height: 100%;
  margin: auto;
  font-family: Helvetica Neue, sans-serif;
  -webkit-perspective: 1400px;
  perspective: 1400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`;

export const classes = [
  'right-3',
  'right-2',
  'right',
  'center',
  'left',
  'left-2',
  'left-3',
];
