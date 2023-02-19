import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

//Here {} is for state which is initially empty
export const store = createStore(reducers, {}, applyMiddleware(thunk))