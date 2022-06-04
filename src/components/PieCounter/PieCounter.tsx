import { IPieCounter } from "./types";

const PieCounter = ({
  sections = 4,
  title = "Give me a title",
  description = "Insert a small description so you can explain what this counter is for",
}: IPieCounter) => {
  return (
    <section data-testid="test-pie-counter">
      <p>Sections: {sections}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
    </section>
  );
};

export default PieCounter;
