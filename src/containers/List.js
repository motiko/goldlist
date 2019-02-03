import React, { Component } from "react";
import produce from "immer";
import { connect } from "react-redux";
import { addCard } from "../ducks/list";
import { List, ListItem, Input } from "react-onsenui";

const Card = ({ original, translation }) => {
  return (
    <ListItem expandable chevron>
      <div className="left">{original}</div>
      <div className="expandable-content">{translation}</div>
    </ListItem>
  );
};

const emptyCard = {
  original: "",
  translation: ""
};

class CardsList extends Component {
  state = {
    newCard: emptyCard
  };

  translationRef = React.createRef();
  originalRef = React.createRef();


  onCardChange = property => ({ currentTarget }) => {
    this.setState(
      produce(draft => {
        draft.newCard[property] = currentTarget.value;
      })
    );
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
      <>
        <List dataSource={cards} renderRows={card => <Card {...card} />} />
        <Input
          defaultValue={newCard.original}
          float
          onChange={this.onCardChange("original")}
          modifier="material"
          elementRef={this.originalRef}
          placeholder="Original"
        />
        <Input
          defaultValue={newCard.translation}
          float
          onChange={this.onCardChange("translation")}
          modifier="material"
          placeholder="Translation"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({ cards: state.list.cards });
const mapDispatchToProps = { addCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsList);
