import { STORAGE_QUESTIONS, STORAGE_QUESTIONS_ERROR } from '../actions';

const INITIAL_STATE = {
  results: [],
  error: '',
};

function storageQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STORAGE_QUESTIONS:
    return {
      results: action.payload.results,
    };

  case STORAGE_QUESTIONS_ERROR:
    return {
      error: 'erro',
    };

  default:
    return state;
  }
}

export default storageQuestionsReducer;
