import { combineReducers } from "redux";
import breadcrumsReducer, { UserInfoReducer } from "./Layout/Breadcrums/reducer";
const rootReducer = combineReducers({
  breadcrumsState: breadcrumsReducer,
  UserInfoState: UserInfoReducer
});
export default rootReducer;
