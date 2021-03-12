import {
  SET_BREADCRUMS_VALUE,
  breadcrumsState,
  breadcrumsActionType,
  UserStateType,
  UserActionType,
  SET_USER_BIO_VALUE,
  SET_USER_VALUE,
} from "./types";
import _ from "lodash";

const breadcrumsInitialState: breadcrumsState = {
  breadcrumsValue: "",
};

const breadcrumsReducer = (
  state: breadcrumsState = breadcrumsInitialState,
  action: breadcrumsActionType
): breadcrumsState => {
  switch (action.type) {
    case SET_BREADCRUMS_VALUE: {
      console.log(action);
      return {
        ...breadcrumsInitialState,
        breadcrumsValue: action.payload.breadCrumbValue,
      };
    }
    default: {
      return state;
    }
  }
};
export default breadcrumsReducer;

//  User info Reducer

export const UserInfoInitialState: UserStateType = {
    id: "",
    username: "",
    email: "",
    bio: "",
    rank: "",
    partyline: "",
    category: ""
};


export const UserInfoReducer = (state: UserStateType = UserInfoInitialState, action: UserActionType): UserStateType => {
    console.log(action.payload);
    
    switch(action.type){

      case SET_USER_VALUE: return action.payload




      default: {
        return state;
      }

    }


};
