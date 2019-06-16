import { POPULATE_USERS_TABLE, GET_USERS_TABLE_DATA } from "./store";
import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";

export type POPULATE_USERS_TABLE = typeof POPULATE_USERS_TABLE;
export type GET_USERS_TABLE_DATA = typeof GET_USERS_TABLE_DATA;

export type PopulateUsersTableActionCreator = ActionCreator<
  Action<POPULATE_USERS_TABLE>
>;

export type GetUsersDataThunkAction = ThunkAction<
  Promise<void>,
  IStoreState,
  any,
  any
>;

export interface IStoreState {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  city: string;
  company: string;
}

export type RawUser = {
  address: {
    city: string;
  };
  company: {
    name: string;
  };
  email: string;
  id: number;
  name: string;
};

export type RawUsers = RawUser[];
