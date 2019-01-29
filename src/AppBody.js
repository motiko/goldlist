import React, { Component } from "react";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";

class AppBody extends Component {
  render() {
    return (
      <Box flex align="center" justify="center">
        <Button icon={<Add />} hoverIndicator onClick={() => {}} />
      </Box>
    );
  }
}

export default AppBody;
