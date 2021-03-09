import { combineReducers } from "redux";
import breadcrumsReducer from "./Layout/Breadcrums/reducer";
const rootReducer = combineReducers({
  breadcrumsState: breadcrumsReducer,
});
export default rootReducer;
