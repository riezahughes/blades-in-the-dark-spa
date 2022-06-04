import { IPieSegment } from "./types";
import styled from "@emotion/styled";
import { useState } from "react";

const PieSegment = ({
  colour = "blue",
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
    background-color: ${colour};
    opacity: ${!stateStatus ? "0.5" : "1"};
    height: 120px;
    width: 120px;
    overflow: hidden;
    transform-origin: 0% 100%;
    transform: rotate(${rotateBy}deg) skew(-${skew}deg);
    position: absolute;
    left: 50%;
    top: -50%;
    &:before {
      transform-origin: 0% 100%;
      transform: rotate(${rotateBy}deg) skew(${skew}deg);
    }
    &:hover {
      background-color: yellow;
      opacity: 1;
      cursor: pointer;
    }
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
