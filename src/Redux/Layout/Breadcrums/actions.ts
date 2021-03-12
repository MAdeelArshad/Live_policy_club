import { breadcrumsActionType, SET_BREADCRUMS_VALUE, SET_USER_BIO_VALUE, SET_USER_CATEGORY_VALUE, SET_USER_PARTY_VALUE, SET_USER_RANK_VALUE, SET_USER_VALUE, UserStateType, UserActionType } from "./types";

export const changeBreadcrumsValue = (
  breadCrumbValue: string
): breadcrumsActionType => {
  return {
    type: SET_BREADCRUMS_VALUE,
    payload: { breadCrumbValue },
  };
};


// User Actions

export const setUserValue = ( 
  userState: UserStateType
  ): UserActionType => {
    return {
      type: SET_USER_VALUE,
      payload: userState ,
    }
  }


export const changeBioValue = ( 
  userState: UserStateType
  ): UserActionType => {
    return {
      type: SET_USER_BIO_VALUE,
      payload: userState ,
    }
  }

  export const changeRankValue = ( 
    userState: UserStateType
    ): UserActionType => {
      return {
        type: SET_USER_RANK_VALUE,
        payload: userState ,
      }
    }

    export const changePartylineValue = ( 
      userState: UserStateType
      ): UserActionType => {
        return {
          type: SET_USER_PARTY_VALUE,
          payload: userState ,
        }
      }

      export const changeCategoryValue = ( 
        userState: UserStateType
        ): UserActionType => {
          return {
            type: SET_USER_CATEGORY_VALUE,
            payload: userState ,
          }
        }