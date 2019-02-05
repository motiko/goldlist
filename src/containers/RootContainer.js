import React, { Component } from "react";
import WordsList from "./WordsList";
import { NavBar, Drawer, Icon, List } from "antd-mobile";
import "./RootContainer.css";

class RootContainer extends Component {
  state = {
    showSidebar: false
  };

  toggleShowSidebar = () =>
    this.setState(prevState => ({ showSidebar: !prevState.showSidebar }));

  render() {
    const { showSidebar } = this.state;
    const { auth } = this.props;
    const authenticated = auth.isAuthenticated();
    const sidebar = (
      <List>
        <List.Item>New List</List.Item>
        <List.Item>Review</List.Item>
        <List.Item>Login</List.Item>
      </List>
    );
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="ellipsis" />}
          onLeftClick={this.toggleShowSidebar}
        >
          Gold List
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 42
          }}
          sidebar={sidebar}
          open={showSidebar}
          onOpenChange={this.toggleShowSidebar}
        >
          <WordsList />
        </Drawer>
      </>
    );
  }
}

export default RootContainer;
