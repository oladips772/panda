/** @format */
import { combineReducers } from "redux";
import { FetchFriendsReducer, FetchTasksReducer } from "./reducers/TaskReducer";

const rootReducer = combineReducers({
  fetchTasks: FetchTasksReducer,
  fetchFrens: FetchFriendsReducer,
});

export default rootReducer;
