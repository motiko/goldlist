import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Callback from "../components/Callback";
import RootContainer from "./RootContainer";
import { Page, Toolbar,BackButton, Icon, ToolbarButton  } from 'react-onsenui';

const AppBar = props => (
  <Toolbar>
    <div className="left">
      <BackButton>
          Back
      </BackButton>
    </div>
    <div className="center">
      Gold List
    </div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar>
);

function App(props) {
  return (
    <Page renderToolbar={() => <AppBar/>}>
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
    </Page>
  );
}

export default withRouter(App);
