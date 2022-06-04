import styled from "@emotion/styled";

import { PieCounter } from "../";

const Div = styled.div``;

const Container = () => {
  return (
    <>
      <PieCounter sections={4} />
      <PieCounter sections={8} />
      <PieCounter sections={8} />
    </>
  );
};

export default Container;
