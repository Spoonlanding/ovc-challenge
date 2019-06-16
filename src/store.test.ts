import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  POPULATE_USERS_TABLE,
  populateUsersTableData,
  getUserData,
  reducer
} from "./store";
import { mockRawUsersData, mockUsers } from "./mocks";
import { url } from "./api";
import { Action } from "redux";

describe("store", () => {
  describe("populateUsersTableData", () => {});
});

describe("populateUsersTableData", () => {
  const mockUsers = ["foo", "bar"];
  let action;
  it(`should return an action object with type ${POPULATE_USERS_TABLE}`, () => {
    action = populateUsersTableData();
    expect(action.type).toEqual(POPULATE_USERS_TABLE);
  });
  it(`should return an action object with users data`, () => {
    action = populateUsersTableData(mockUsers);
    expect(action.users).toEqual(mockUsers);
  });
});

describe("getUserData", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ users: [] });
  const expectedActions = [
    {
      type: POPULATE_USERS_TABLE,
      users: mockUsers
    }
  ];

  afterEach(() => {
    fetchMock.restore();
  });

  it(`creates ${POPULATE_USERS_TABLE} when users data has been fetched`, () => {
    fetchMock.getOnce(url, {
      body: JSON.stringify(mockRawUsersData),
      headers: { "content-type": "application/json" }
    });

    return store.dispatch(getUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as Action)).toEqual({ users: [] });
  });

  it(`should handle ${POPULATE_USERS_TABLE}`, () => {
    expect(
      reducer({ users: [] }, {
        type: POPULATE_USERS_TABLE,
        users: mockUsers
      } as any)
    ).toEqual({ users: mockUsers });
  });
});
