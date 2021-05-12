import { combineReducers, createStore } from "redux";
import BoardReducer from "../store/Board/Board.reducer";

const rootReducer = combineReducers({
  board: BoardReducer,
});

const store = createStore(rootReducer);

export default store;
