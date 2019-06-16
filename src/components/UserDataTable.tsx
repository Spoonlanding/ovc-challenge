import React, { useEffect } from "react";
import { IStoreState, IUser } from "../types";
import { Dispatch } from "redux";
import { getUserData } from "../store";
import { connect } from "react-redux";

interface Props {
  fetchData: () => void;
  users: IUser[];
}

export class UserDataTable extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { users } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {!!users.length ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.company}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Loading users data...</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ users }: IStoreState) {
  return { users };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchData: () => dispatch<any>(getUserData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDataTable);
