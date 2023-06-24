import { combineReducers } from "redux";
import { todoListReducers } from "../todoListReducers";

export const rootReducers = combineReducers({
    todoListReducers : todoListReducers
})