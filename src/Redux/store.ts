import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { breadcrumsState, UserStateType } from "./Layout/Breadcrums/types";
import {UserInfoInitialState} from "./Layout/Breadcrums/reducer"; 

export interface IAppState {
  breadcrumsState: breadcrumsState;
  UserInfo: UserStateType;
}

const initialState: IAppState = {
  breadcrumsState: {
    breadcrumsValue: "",
  },
  UserInfo: UserInfoInitialState
  
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;


