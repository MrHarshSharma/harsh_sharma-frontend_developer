import { cleanup, render, screen } from "@testing-library/react";
import Banner from "../Banner";

afterEach(()=>{
    cleanup();
})


test("should render banner", () => {
  render(<Banner />);
  const bannerElement = screen.getByTestId("banner-id");
  expect(bannerElement).toBeInTheDocument();
  expect(bannerElement).toHaveTextContent(
    "UPGRADES AHEAD OF STARSHIP’S SECOND FLIGHT TES"
  );
});
