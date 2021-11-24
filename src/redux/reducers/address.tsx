import * as actions from "../types/address";
import data from '../../assets/data/contacts.json'

const initialState = {
  isLoading: false,
  contacts: [],
};

export const address = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FIND_ALL_CONTACTS:
      return {
        ...state,
        contacts: data,
      };

    case actions.SEARCH_BY_STRING:
      const keyToFind = action.key;
      console.log(keyToFind);
      return {
        ...state,
        contacts: data.filter((user:any) => {
            const name = user.first_name + user.last_name as string
            return name.split(' ').join('').toLowerCase().includes(
                keyToFind.split(' ').join('').toLowerCase()
            )
        }),
      };

    default:
      return state;
  }
};

export default address;
