const defaultState = [
  { title: "📝 To Do", color: "#5CC4FF", list: [] },
  { title: "📝 Doing", color: "#945AD1", list: [] },
  { title: "📝 Complete", color: "#59D090", list: [] },
];

export default function BoardReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_BOARD_LIST":
      return action.payload;

    case "ADD_ITEM_TO_LIST": {
      let newState = [...state];
      let { listIndex } = action.payload;
      let list = newState[listIndex].list;
      list.push(action.payload.item);
      return newState;
    }
    case "REMOVE_ITEM_FROM_LIST": {
      let newState = [...state];
      let { itemIndex, listIndex } = action.payload;
      let list = newState[listIndex].list;
      list.splice(itemIndex, 1);
      return newState;
    }

    case "ADD_LIST_TO_BOARD": {
      let newState = [...state];
      let { title, color } = action.payload;
      console.log(color);
      newState.push({ title, color, list: [] });
      return newState;
    }

    case "REMOVE_LIST_FROM_BOARD": {
      let newState = [...state];
      let { listIndex } = action.payload;
      newState.splice(listIndex, 1);
      return newState;
    }

    default:
      return state;
  }
}
