import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/index";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
