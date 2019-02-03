import React, { Component } from "react";
import produce from "immer";
import { connect } from "react-redux";
import { Box, FormField, Grid, TextInput, Heading } from "grommet";
import { addCard } from "../ducks/list";

const Card = ({ original, translation }) => {
  return (
    <Box flex align="center" justify="center">
      <Heading> {original}</Heading>
      <Heading> {translation}</Heading>
    </Box>
  );
};

const emptyCard = {
  original: "",
  translation: ""
};

class List extends Component {
  state = {
    newCard: emptyCard
  };

  translationRef = React.createRef();
  originalRef = React.createRef();

  componentDidMount() {
    this.originalRef.current.focus();
  }

  onCardChange = property => ({ currentTarget }) => {
    this.setState(
      produce(draft => {
        draft.newCard[property] = currentTarget.value;
      })
    );
  };

  onOriginalKeyUp = ({ keyCode }) => {
    if (keyCode === 13) {
      this.translationRef.current.focus();
    }
  };

  onTranslationKeyUp = ({ keyCode }) => {
    if (keyCode === 13) {
      this.originalRef.current.focus();
      this.props.addCard(this.state.newCard);
      this.setState({ newCard: emptyCard });
    }
  };

  render() {
    const { cards } = this.props;
    const { newCard } = this.state;
    return (
      <Grid
        fill={true}
        rows={["3/4", "1/4"]}
        columns={["full"]}
        gap="medium"
        areas={[
          { name: "list", start: [0, 0], end: [0, 0] },
          { name: "new", start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box gridArea="list" background="light-2" >
        {cards.map(card => (
          <Card {...card} />
        ))}
      </Box>
        <Box gridArea="new" >
          <FormField>
            <TextInput
              placeholder="Original text"
              value={newCard.original}
              onInput={this.onCardChange("original")}
              onKeyUp={this.onOriginalKeyUp}
              ref={this.originalRef}
            />
          </FormField>
          <FormField>
            <TextInput
              placeholder="Tranlsation"
              value={newCard.translation}
              onInput={this.onCardChange("translation")}
              ref={this.translationRef}
              onKeyUp={this.onTranslationKeyUp}
            />
          </FormField>
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ cards: state.list.cards });
const mapDispatchToProps = { addCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
