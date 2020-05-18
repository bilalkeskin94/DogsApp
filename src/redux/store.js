import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dogReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const reducers = combineReducers({
  dogReducer: dogReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
