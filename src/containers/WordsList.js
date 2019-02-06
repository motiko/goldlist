import React, { Component } from "react";
import produce from "immer";
import { connect } from "react-redux";
import { List, InputItem, WingBlank } from "antd-mobile";
import { addCard } from "../ducks/list";
import "./WordsList.css";

const Card = ({ original, translation }) => {
  return (
    <List.Item>
      {original} --
      {translation}
    </List.Item>
  );
};

const emptyCard = {
  original: "",
  translation: ""
};

class WordsList extends Component {
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
      <div>
        <List>
          {cards.map(card => (
            <Card {...card} />
          ))}
        </List>
        <div
          className="fixed-bottom"
        >
          <WingBlank size="lg">
          <InputItem
            placeholder="Original text"
            value={newCard.original}
            onInput={this.onCardChange("original")}
            onKeyUp={this.onOriginalKeyUp}
            ref={this.originalRef}
          />
          <InputItem
            placeholder="Tranlsation"
            value={newCard.translation}
            onInput={this.onCardChange("translation")}
            ref={this.translationRef}
            onKeyUp={this.onTranslationKeyUp}
          />
        </WingBlank>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ cards: state.list.cards });
const mapDispatchToProps = { addCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordsList);
