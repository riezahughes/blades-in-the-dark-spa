import styled from "@emotion/styled";

import { PieCounter } from "../";

const Div = styled.div``;

const Container = () => {
  return (
    <>
      <PieCounter sections={4} />
      {/* <PieCounter colour="green" sections={8} /> */}
      {/* <PieCounter colour="#c51818" sections={8} /> */}
    </>
  );
};

export default Container;
