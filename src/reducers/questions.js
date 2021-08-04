import { STORAGE_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  results: [],
};

function storageQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STORAGE_QUESTIONS:
    return {
      results: [action.payload],
    };
  default:
    return state;
  }
}

export default storageQuestionsReducer;
