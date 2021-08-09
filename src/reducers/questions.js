import {
  STORAGE_QUESTIONS,
  STORAGE_QUESTIONS_ERROR,
  GET_QUESTIONS, NEXT_QUESTION,
  SET_ANSWERED_TRUE,
} from '../actions';

const INITIAL_STATE = {
  questions: [],
  questionNumber: 0,
  answered: false,
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
  case NEXT_QUESTION:
    return { ...state, questionNumber: state.questionNumber + 1, answered: false };
  case SET_ANSWERED_TRUE:
    return { ...state, answered: true };

  default:
    return state;
  }
}

export default storageQuestionsReducer;
