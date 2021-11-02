import { combineReducers } from "redux";
import menuReducer from "./menuActive";
import bugReducer from "./singleBug";
const allReducers = combineReducers({
    menuReducer,
    bugReducer
})

export default allReducers;

