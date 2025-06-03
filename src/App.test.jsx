import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders hello message", () => {
  render(<App />);
  expect(screen.getByText(/Add Animal/i)).toBeInTheDocument();
});
