import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "../components/Callback";
import RootContainer from "./RootContainer";
import { Grommet } from "grommet";

function App(props) {
  const theme = {
    global: {
      colors: {
        brand: "#228BE6"
      },
      font: {
        family: "Roboto",
        size: "14px",
        height: "20px"
      }
    }
  };
  return (
    <Grommet theme={theme} full>
      <Route
        exact
        path="/callback"
        render={() => <Callback auth={props.auth} />}
      />
      <Route
        exact
        path="/"
        render={() => (
          <RootContainer
            auth={props.auth}
            history={props.history}
          />
        )}
      />
    </Grommet>
  );
}

export default withRouter(App);
