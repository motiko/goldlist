import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "../components/Callback";
import RootContainer from "./RootContainer";

function App(props) {
  return (
    <>
      <Route
        exact
        path="/callback"
        render={() => <Callback auth={props.auth} />}
      />
      <Route
        path="/"
        render={() => (
          <RootContainer
            auth={props.auth}
            history={props.history}
          />
        )}
      />
    </>
  );
}

export default withRouter(App);
