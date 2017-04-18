import {
  WORD_UPDATE,
  WORD_CREATE,
  WORD_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  newword: '',
  definition: ''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WORD_UPDATE:
      //action.payload
      return { ...state, [action.payload.prop] : action.payload.value };

    case WORD_CREATE:
      return INITIAL_STATE;
    case WORD_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;

  }
};
