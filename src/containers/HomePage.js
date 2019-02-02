import React, { Component } from "react";
import {
  Box,
  Button,
  Heading,
} from "grommet";
import { Menu, Login } from "grommet-icons";
import AppBody from "./AppBody";
import SideBar from "./SideBar";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);


class HomePage extends Component {
  state = {
    showSidebar: false
  };

  render() {
    const { showSidebar } = this.state;
    const { auth } = this.props;
    const authenticated = auth.isAuthenticated();
    return (
      <Box fill>
        <AppBar>
          <Button
            icon={<Menu />}
            onClick={() =>
              this.setState(prevState => ({
                showSidebar: !prevState.showSidebar
              }))
            }
          />{" "}
          <Heading level="3" margin="none">
            goldList
          </Heading>
          {!authenticated && <Button icon={<Login />} onClick={auth.login} />}
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          {showSidebar && (
            <SideBar
              onClose={() => this.setState({ showSidebar: false })}
              showSidebar={showSidebar}
            />
          )}
          <AppBody />
        </Box>
      </Box>
    );
  }
}

export default HomePage;
