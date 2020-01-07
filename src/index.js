import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import UsersContainer from "./containers/UsersContainers";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <UsersContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
