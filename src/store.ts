import { createStore, Action, applyMiddleware, Dispatch } from "redux";
import thunk from "redux-thunk";
import { fetchUserData } from "./api";
import {
  PopulateUsersTableActionCreator,
  GetUsersDataThunkAction,
  IStoreState,
  IUser
} from "./types";

export const intiialState: IStoreState = { users: [] };
export const POPULATE_USERS_TABLE = "POPULATE_USERS_TABLE";
export const GET_USERS_TABLE_DATA = "GET_USERS_TABLE_DATA";

// action creator
export const populateUsersTableData: PopulateUsersTableActionCreator = (
  users: IUser[]
) => {
  return { type: POPULATE_USERS_TABLE, users };
};

// thunk
export function getUserData(): GetUsersDataThunkAction {
  return async function(dispatch: Dispatch) {
    const data = await fetchUserData();
    dispatch(populateUsersTableData(data));
  };
}

export function reducer(state = intiialState, action: Action) {
  switch (action.type) {
    case POPULATE_USERS_TABLE:
      return { ...state, users: (action as any).users };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
