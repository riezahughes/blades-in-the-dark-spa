import { render, within, screen } from "@testing-library/react";
import PieCounter from "./PieCounter";

describe("PieCounter component testing", () => {
  it("Can display all defaults if nothing is added", async () => {
    render(<PieCounter />);

    const { getByText } = within(screen.getByTestId("test-pie-counter"));

    expect(await getByText("Sections: 4")).toBeInTheDocument();
    expect(await getByText("Title: Give me a title")).toBeInTheDocument();
    expect(
      await getByText(
        "Description: Insert a small description so you can explain what this counter is for"
      )
    ).toBeInTheDocument();
  });

  it("Can display custom settings", () => {
    render(
      <PieCounter
        sections={2}
        title="Days Left"
        description="The number of days left till you are attacked"
      />
    );

    const { getByText } = within(screen.getByTestId("test-pie-counter"));

    expect(getByText("Sections: 2")).toBeInTheDocument();
    expect(getByText("Title: Days Left")).toBeInTheDocument();
    expect(
      getByText("Description: The number of days left till you are attacked")
    ).toBeInTheDocument();
  });
});
