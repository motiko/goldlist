import produce from "immer";

const CREATE = "goldlist/lists/CREATE";
const REMOVE = "goldlist/lists/REMOVE";

export default function reducer(state = {}, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE:
        const { list } = action;
        draft[action.list.id] = list;
        return;
      case REMOVE:
        const { listId } = action;
        delete draft[listId];
    }
  });
}

export function createList(list) {
  return { type: CREATE, list };
}

export function removeList(listId) {
  return { type: REMOVE, listId };
}
