import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import App from "./App";
import UserDataTable from "./components/UserDataTable";
import store from "./store";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders successfully", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders a <Provider />", () => {
    expect(wrapper.find(<Provider store={store} />)).toBeTruthy();
  });

  it("renders <UserDataTable />", () => {
    expect(wrapper.find(<UserDataTable />)).toBeTruthy();
  });
});
