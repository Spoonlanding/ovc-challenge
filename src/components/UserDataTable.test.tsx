import React from "react";
import { shallow } from "enzyme";
import { UserDataTable } from "./UserDataTable";
import { mockUsers } from "../mocks";

describe("<UserDataTable />", () => {
  let wrapper;
  let mockFetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <UserDataTable fetchData={mockFetch} users={mockUsers} />
    );
  });
  it("should fetch data on mount", () => {
    expect(mockFetch.mock.calls.length).toBeGreaterThan(0);
  });

  it("should render a row for each user", () => {
    const rowCount = wrapper.find("tbody").children().length;
    expect(rowCount).toEqual(mockUsers.length);
  });

  describe("rows", () => {
    describe("when users is populated", () => {
      const user = mockUsers[0];
      it("should render name cells", () => {
        expect(wrapper.find(<td>{user.name}</td>)).toBeTruthy();
      });
      it("should render a email cell", () => {
        expect(wrapper.find(<td>{user.email}</td>)).toBeTruthy();
      });
      it("should render a city cell", () => {
        expect(wrapper.find(<td>{user.city}</td>)).toBeTruthy();
      });
      it("should render a company cell", () => {
        expect(wrapper.find(<td>{user.company}</td>)).toBeTruthy();
      });
    });
    describe("when users is empty", () => {
      it("should render a 'Loading users data...' cell", () => {
        wrapper = shallow(<UserDataTable fetchData={mockFetch} users={[]} />);
        expect(wrapper.find(<td>Loading users data...</td>)).toBeTruthy();
      });
    });
  });
});
