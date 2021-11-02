import { combineReducers } from "redux";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
const allReducers = combineReducers({
    menuReducer,
    bugRe
})

export default allReducers;

