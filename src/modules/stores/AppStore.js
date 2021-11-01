import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import MainContentReducer from "../reducers/MainContentReducer";
import RightContentReducer from "../reducers/RightContentReducer";

const rootReducer = combineReducers({
  mainContent: MainContentReducer,
  rightContent: RightContentReducer,
});

const AppStore = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default AppStore;
