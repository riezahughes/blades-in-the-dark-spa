import { IPieSelection } from "./types";
import styled from "@emotion/styled";
import { useState } from "react";

const PieSelection = ({ rotateBy = 90, totalSegments }: IPieSelection) => {
  const skew = totalSegments == 4 ? 0 : 360 / totalSegments;

  const Div = styled.div`
    background-color: transparent;
    height: 120px;
    width: 120px;
    overflow: hidden;
    transform-origin: 0% 100%;
    transform: rotate(${rotateBy}deg) skew(-${skew}deg);
    transition: background 0.5s, opacity 0.5s;
    position: absolute;
    left: 50%;
    top: -50%;
    &:before {
      transform-origin: 0% 100%;
      transform: rotate(${rotateBy}deg) skew(${skew}deg);
    }
    &:hover {
      background-color: white;
      opacity: 1;
      cursor: pointer;
    }
    border: 10px solid #ffbb4a;
    z-index: 10;
  `;

  return <Div data-testid="test-pie-segment"></Div>;
};

export default PieSelection;
