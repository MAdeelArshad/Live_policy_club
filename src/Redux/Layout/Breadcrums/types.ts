export interface breadcrumsState {
  breadcrumsValue: string;
}

export interface actionPaylodType {
  breadCrumbValue: string;
}

export const SET_BREADCRUMS_VALUE: string = "SET_BREADCRUMS_VALUE";

export interface breadcrumsActionType {
  type: typeof SET_BREADCRUMS_VALUE;
  payload: actionPaylodType;
}

// User Types 

export interface UserStateIdType{
  IdValue: number;
}

export interface UserStateUsernameType{
UsernameValue: string;
}

export interface UserStateEmailType{
EmailValue: string;
}

export interface UserStateBioType{
      BioValue: string;
}

export interface UserStateRankType{
  RankValue: string;
}

export interface UserStatePartylineType{
  PartlineValue: string;
}

export interface UserStateCategoryType{
  CategoryValue: string;
}

export const SET_USER_VALUE: string = "SET_USER_VALUE";
export const SET_USER_BIO_VALUE: string = "SET_USER_BIO_VALUE";
export const SET_USER_RANK_VALUE: string = "SET_USER_RANK_VALUE";
export const SET_USER_PARTY_VALUE: string = "SET_USER_PARTY_VALUE";
export const SET_USER_CATEGORY_VALUE: string = "SET_USER_CATEGORY_VALUE";



export interface UserStateType {
    id: string;
    username: string;
    email: string;
    bio: string;
    rank: string;
    partyline: string;
    category: string
}


export interface UserActionType {
  type: typeof SET_USER_BIO_VALUE;
  payload: UserStateType;
}

