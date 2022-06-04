import { IPieSegment } from "./types";
import styled from "@emotion/styled";
import { useState } from "react";

const PieSegment = ({
  colour = "#2003bd",
  status = false,
  rotateBy = 90,
  totalSegments,
}: IPieSegment) => {
  const [stateStatus, setStateStatus] = useState(status);

  const toggleStateStatus = () => {
    setStateStatus(!stateStatus);
  };

  const skew = totalSegments == 4 ? 0 : 360 / totalSegments;

  const Div = styled.div`
    background-color: ${stateStatus ? "rgba(0, 0, 0, 0)" : colour};
    opacity: ${!stateStatus ? "0.75" : "1"};
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
    border: 1px solid rgba(0, 0, 0, 0.05);
  `;

  return (
    <Div
      data-testid="test-pie-segment"
      data-colour={colour}
      data-status={status}
      onClick={toggleStateStatus}
    ></Div>
  );
};

export default PieSegment;
