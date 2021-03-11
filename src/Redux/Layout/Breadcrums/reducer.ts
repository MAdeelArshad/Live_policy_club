import {
  SET_BREADCRUMS_VALUE,
  breadcrumsState,
  breadcrumsActionType,
  UserActionPayloadType,
  UserActionType,
  SET_USER_BIO_VALUE,
  SET_USER_VALUE,
} from "./types";

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

const UserInfoInitialState: UserActionPayloadType = {
    id: 0,
    username: "",
    email: "",
    bio: "",
    rank: "",
    partyline: "",
    category: ""
};


export const UserInfoReducer = (state: UserActionPayloadType = UserInfoInitialState, action: UserActionType): UserActionPayloadType => {
    console.log(action.payload);
    switch(action.type){

      case SET_USER_VALUE: return {...UserInfoInitialState, 
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        bio: action.payload.bio,
        rank: action.payload.rank,
        partyline: action.payload.partyline,
        category: action.payload.category
      
      }




      default: {
        return state;
      }

    }


};
