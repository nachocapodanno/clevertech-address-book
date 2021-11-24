import * as actionTypes from "../types/address";

export const searchByString = (key:string) => {
  return { type: actionTypes.SEARCH_BY_STRING , key};
}

export const findAllContacts = () => {
    return { type: actionTypes.FIND_ALL_CONTACTS };
  }