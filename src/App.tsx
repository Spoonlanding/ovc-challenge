import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserDataTable from "./components/UserDataTable";

function App(): JSX.Element {
  return (
    <div className="App">
      <UserDataTable />
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
