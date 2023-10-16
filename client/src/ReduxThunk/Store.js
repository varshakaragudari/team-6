import { createStore, compose, applyMiddleware } from "redux";
import Reducers from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
