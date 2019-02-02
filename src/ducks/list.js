import produce from "immer";

const ADD_CARD = "goldlist/list/ADD_CARD";
const REMOVE_CARD = "goldlist/list/REMOVE_CARD";

const defaultList = {
  cards: []
};

export default function reducer(state = defaultList , action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_CARD:
        draft.cards.push({})
        return;
      case REMOVE_CARD:
        const { index } = action;
        draft.splice(index)
        return;
    }
  });
}

export function addCard() {
  return { type: ADD_CARD };
}

export function removeCard(index) {
  return { type: REMOVE_CARD, index };
}
