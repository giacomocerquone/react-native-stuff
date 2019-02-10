import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function user(state = {}, action) {
  switch (action.type) {
    case 'WHATEVER':
      return { ...state };
    default:
      return state;
  }
}

const appReducer = persistCombineReducers(
  {
    key: 'primary',
    storage,
  },
  {
    user,
  },
);

const rootReducer = (state, action) => {
  /*
  Can implement a reset action here
  if (action.type === CLEAR_STATE) {
  }
  */
  return appReducer(state, action);
};

export default rootReducer;

// Selectors goes here
// export const etc.
