import { cleanup, render, screen } from "@testing-library/react";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Pagination from "../../common/Pagination";
import { initialState } from "../../constants/testingInitialState";

afterEach(()=>{
    cleanup();
})


test("Should Render Pagination", () => {
  const state = initialState;

  const mockstore = configureStore();
  const store = mockstore(state);
  render(
    <Provider store={store}>
      <Pagination />
    </Provider>
  );

  const paginationElement = screen.getByTestId("pagination-id");
  expect(paginationElement).toBeInTheDocument();
});
