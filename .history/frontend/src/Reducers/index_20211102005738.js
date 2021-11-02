import { combineReducers } from "redux";
import bugsShowReducer from "./bugsShow";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
import allBugsReducer from "./bugsList";
import workersListReducer from "./workersList";

const allReducers = combineReducers({
    menuReducer,
    bugReducer,
    bugsShowReducer,
    allBugsReducer,
    workersListReducer
})

export default allReducers;

