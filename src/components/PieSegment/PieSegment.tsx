import { IPieSegment } from "./types";
import styled from "@emotion/styled";
import { useState } from "react";

const PieSegment = ({
  colour = "blue",
  status = false,
  rotate = 90,
}: IPieSegment) => {
  const [stateStatus, setStateStatus] = useState(status);

  const toggleStateStatus = () => {
    setStateStatus(!stateStatus);
  };

  const Div = styled.div`
    background-color: ${colour};
    opacity: ${!stateStatus ? "0.5" : "1"};
    height: 120px;
    width: 120px;
    overflow: hidden;
    transform-origin: 0% 100%;
    transform: rotate(${rotate}deg) skew(-0deg);
    position: absolute;
    left: 50%;
    top: -50%;
    cursor: pointer
    &:before {
      transform-origin: 0% 100%;
      transform: rotate(${rotate}deg) skew(0deg);
    }
    &:hover {
      background-color: yellow;
      opacity: 1;
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
