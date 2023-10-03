import { render, screen, cleanup } from "@testing-library/react";

import Footer from "../Footer";

afterEach(()=>{
    cleanup();
})


test("Should Render Footer", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer-id");
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveTextContent("All right reserved");
});
