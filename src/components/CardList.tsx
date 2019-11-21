import React from "react";
import Slider from "react-slick";
import styled from "styled-components/macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderDot = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  background: linear-gradient(87.87deg, #ffffff 3.58%, #587ca5 305.99%);
  &:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    box-shadow: 2px 1px 3px rgba(24, 55, 91, 0.2),
      -2px -1px 4px rgba(255, 255, 255, 0.4),
      inset -4px -3px 4px rgba(79, 98, 120, 0.2),
      inset 3px 3px 5px rgba(213, 230, 245, 0.4);
  }

  .slick-active & {
    &:after {
      background: linear-gradient(106.79deg, #ffffff -62.32%, #587ca5 190.73%);
      box-shadow: inset 2px 2px 3px rgba(79, 98, 120, 0.9),
        inset 3px 3px 5px rgba(213, 230, 245, 0.4);
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
  }

  .slick-dots {
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const CardList: React.FC = props => (
  <StyledSlider
    infinite={false}
    arrows={false}
    variableWidth
    centerMode
    dots
    customPaging={() => <SliderDot />}
    focusOnSelect
    accessibility
  >
    {props.children}
  </StyledSlider>
);
