import React from "react";
import styled from "styled-components/macro";

const CardOuter = styled.div`
  border-radius: 24px;
  box-shadow: 16px 4px 64px rgba(18, 61, 101, 0.3),
    -16px -16px 40px rgba(255, 255, 255, 0.8),
    inset -8px -6px 80px rgba(255, 255, 255, 0.18);
  z-index: 1;
  position: relative;
  flex-shrink: 0;
  display: inline-block;
  outline: transparent;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    z-index: 0;
    background: linear-gradient(
      135deg,
      #fff 26.33%,
      rgba(219, 230, 242, 0) 50.71%,
      #8f9fae 100%
    );
    border-radius: 24px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(200.6deg, #ebf2f9 19.14%, #c6d7eb 154.68%);
    border-radius: 24px;
  }
`;

const Slide = styled.div`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const CardInner = styled.div`
  text-align: initial;
  position: relative;
  z-index: 2;
`;

export const Card: React.FC<React.ComponentProps<typeof CardOuter>> = ({
  children,
  style,
  ...rest
}) => (
  <Slide style={style}>
    <CardOuter {...rest}>
      <CardInner>{children}</CardInner>
    </CardOuter>
  </Slide>
);
