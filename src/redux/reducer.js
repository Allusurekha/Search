import { combineReducers } from "redux";
import usersReducer from "./users/reducer";

const reducer = combineReducers({
  users: usersReducer
});

export default reducer;
