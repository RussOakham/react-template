import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
