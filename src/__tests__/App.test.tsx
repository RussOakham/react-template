import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).to.exist;
  });

  // Add more tests as needed
});
