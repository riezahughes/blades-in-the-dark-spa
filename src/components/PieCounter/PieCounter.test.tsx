import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PieCounter from "./PieCounter";

describe("PieCounter component testing", () => {
  it("Can display all defaults if nothing is added", async () => {
    render(<PieCounter sections={null} title={null} description={null} />);

    expect(screen.getAllByTestId("test-pie-counter")).toContain("4");
    expect(screen.getAllByTestId("test-pie-counter")).toContain(
      "Give me a title"
    );
    expect(screen.getAllByTestId("test-pie-counter")).toContain(
      "Insert a small description so you can explain what this counter is for"
    );
  });
  it("Can display custom settings", () => {
    render(
      <PieCounter
        sections={2}
        title="Days Left"
        description="The number of days left till you are attacked"
      />
    );

    expect(screen.getAllByTestId("test-pie-counter")).toContain("2");
    expect(screen.getAllByTestId("test-pie-counter")).toContain("Days Left");
    expect(screen.getAllByTestId("test-pie-counter")).toContain(
      "The number of days left till you are attacked"
    );
  });
});
