import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import postReducer from "./postReducers";

export default combineReducers({
  counter: counterReducer,
  postList: postReducer
});
