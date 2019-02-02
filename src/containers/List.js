import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";
import { addCard } from "../ducks/list";

const Card = props => (
  <Box flex align="center" justify="center">
    QWE
  </Box>
);

class List extends Component {
  render() {
    const { addCard, cards } = this.props;
    return (
      <>
        {cards.map(card => (
          <Card />
        ))}
        <Box flex align="center" justify="center">
          <Button icon={<Add />} hoverIndicator onClick={addCard} />
        </Box>
      </>
    );
  }
}

const mapStateToProps = state => ({ cards: state.list.cards });
const mapDispatchToProps = { addCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
