import { render, screen } from "@testing-library/react";
import PieSegment from "./PieSegment";

describe("PieSegment component testing", () => {
  it("Can display all defaults if nothing is added", async () => {
    // expect colour to be blue and for opacity to be set
    render(<PieSegment rotate={90} />);

    expect(screen.getByTestId("test-pie-segment")).toHaveStyle(`opacity: 0.5`);
    expect(screen.getByTestId("test-pie-segment")).toHaveStyle(
      `background-color: blue`
    );
    // expect(getByText("Title: Give me a title")).toBeInTheDocument();
  });

  it("Can display custom settings", () => {
    render(<PieSegment colour="green" status={true} rotate={90} />);

    expect(screen.getByTestId("test-pie-segment")).toHaveStyle(`opacity: 1`);
    expect(screen.getByTestId("test-pie-segment")).toHaveStyle(
      `background-color: green`
    );

    // expect(getByText("Sections: 2")).toBeInTheDocument();
    // expect(getByText("Title: Days Left")).toBeInTheDocument();
  });
});
