import React, { Component } from "react";
import List from "./List";
import SideBar from "./SideBar";



class RootContainer extends Component {
  state = {
    showSidebar: false
  };

  render() {
    const { showSidebar } = this.state;
    const { auth } = this.props;
    const authenticated = auth.isAuthenticated();
    return (
          <List />
    );
  }
}

export default RootContainer;
