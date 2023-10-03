import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";
afterEach(()=>{
    cleanup();
})

test("Should Render Header", () => {
  render(<Header />);
  const headerElement = screen.getByTestId("header-id");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("SpaceX");
});
