import { combineReducers } from "redux";
import bugsShowReducer from "./bugsShow";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
bugsShowReducer
const allReducers = combineReducers({
    menuReducer,
    bugReducer,
    bugsShowReducer
})

export default allReducers;

