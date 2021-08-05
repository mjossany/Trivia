import { STORAGE_QUESTIONS, STORAGE_QUESTIONS_ERROR, GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  error: '',
};

function storageQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return { ...state, loading: true };
  case STORAGE_QUESTIONS:
    return { ...state, loading: false, questions: action.payload };
  case STORAGE_QUESTIONS_ERROR:
    return { ...state, error: 'erro' };

  default:
    return state;
  }
}

export default storageQuestionsReducer;
