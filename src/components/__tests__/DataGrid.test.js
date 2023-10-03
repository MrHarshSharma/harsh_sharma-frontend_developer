import { cleanup, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import DataGrid from "../DataGrid";
import { initialState } from "../../constants/testingInitialState";

afterEach(()=>{
    cleanup();
})

test("Should Render DataGrid", () => {
  const state = initialState;

  const mockstore = configureStore();
  const store = mockstore(initialState);
  render(
    <Provider store={store}>
      <DataGrid />
    </Provider>
  );

  const datagridElement = screen.getByTestId("datagrid-id");
  expect(datagridElement).toBeInTheDocument();
  expect(datagridElement).toHaveTextContent("Capsules");
});


test("Should Render Filter container", () => {
    const state = initialState;
  
    const mockstore = configureStore();
    const store = mockstore(initialState);
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
  
    const datagridElement = screen.getByTestId("filter-id");
    expect(datagridElement).toBeInTheDocument();
    expect(datagridElement).toHaveTextContent("Status");
    expect(datagridElement).toHaveTextContent("Type");
    expect(datagridElement).toHaveTextContent("Launch");
  });