import { combineReducers } from "redux";
import bugsShowReducer from "./bugsShow";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
import allBugsReducer from "./bugsList";
const allReducers = combineReducers({
    menuReducer,
    bugReducer,
    bugsShowReducer,
    allBugsReducer
})

export default allReducers;

