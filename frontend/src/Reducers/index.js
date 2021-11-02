import { combineReducers } from "redux";
import bugsShowReducer from "./bugsShow";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
import allBugsReducer from "./bugsList";
import workersListReducer from "./workersList";
import popUpReducer from "./popUp";

const allReducers = combineReducers({
    menuReducer,
    bugReducer,
    bugsShowReducer,
    allBugsReducer,
    workersListReducer,
    popUpReducer
})

export default allReducers;

