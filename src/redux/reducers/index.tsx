import { combineReducers } from 'redux';

// reducers
import { address as addressReducer } from './address';

export const rootReducer = combineReducers({
    address: addressReducer,
});

export type RootState = ReturnType<typeof rootReducer>