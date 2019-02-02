import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

const auth = new Auth();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App auth={auth} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
