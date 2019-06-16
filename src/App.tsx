import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserDataTable from "./components/UserDataTable";

function App(): JSX.Element {
  const githubUrl = "https://github.com/Spoonlanding/ovc-challenge";
  const linkedInUrl = "https://www.linkedin.com/in/spoonlanding/";
  return (
    <div className="App">
      <h1 id="pageHeader">OVC Coding Challenge</h1>
      <h3 id="subHeader">
        Submission by <a href={linkedInUrl}>Spencer Mitchell</a> |{" "}
        <a href={githubUrl}>View on GitHub</a>
      </h3>
      <UserDataTable />
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
