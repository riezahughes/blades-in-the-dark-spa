import { IPieCounter } from "./types";
import styled from "@emotion/styled";

import { PieSegment } from "../";

import imgUrl from "../../static/default_pie_bkg.jpg";

const Div = styled.div`
  background-image: url(${imgUrl});
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
  position: relative;
`;

const PieCounter = ({
  sections = 4,
  title = "Give me a title",
  description = "Insert a small description so you can explain what this counter is for",
  colour = "#2003bd",
}: IPieCounter) => {
  const sectionArray = Array.from(Array(sections).keys());

  let rotateCount = 0;

  return (
    <>
      <section data-testid="test-pie-counter">
        <p>Sections: {sections}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
      </section>

      <Div>
        {sectionArray.map((segment, index) => {
          rotateCount = rotateCount + 360 / sections;
          return (
            <PieSegment
              colour={colour}
              key={`pie-${index}`}
              rotateBy={rotateCount}
              totalSegments={sections}
            />
          );
        })}
      </Div>
    </>
  );
};

export default PieCounter;
