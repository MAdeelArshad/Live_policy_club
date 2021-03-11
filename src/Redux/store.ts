import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { breadcrumsState } from "./Layout/Breadcrums/types";

export interface IAppState {
  breadcrumsState: breadcrumsState;
}

const initialState: IAppState = {
  breadcrumsState: {
    breadcrumsValue: "",
  },
  
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;


