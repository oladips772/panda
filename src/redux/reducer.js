/** @format */
import { combineReducers } from "redux";
import { FetchTasksReducer } from "./reducers/TaskReducer";

const rootReducer = combineReducers({
  fetchTasks: FetchTasksReducer,
});

export default rootReducer;
