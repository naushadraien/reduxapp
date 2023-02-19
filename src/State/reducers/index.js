//it is for combining all the reducers into single reducer and export it
import { combineReducers } from "redux";
import amountRecuder from "./amountRecuder";

const reducers = combineReducers({
    amount: amountRecuder
})

export default reducers