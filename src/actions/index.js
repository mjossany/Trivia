export const STORAGE_PLAYER_INFO = 'STORAGE_PLAYER_INFO';
export const STORAGE_QUESTIONS = 'STORAGE_QUESTIONS';
export const STORAGE_QUESTIONS_ERROR = 'STORAGE_QUESTIONS_ERROR';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';

export const getToken = (payload) => ({ type: GET_TOKEN, payload });

export const getTokenError = ({ type: GET_TOKEN_ERROR });

export const getQuestions = (payload) => ({ type: GET_QUESTIONS, payload });

export const storagePlayerInfo = (payload) => ({ type: STORAGE_PLAYER_INFO, payload });

export const storageQuestions = (payload) => ({ type: STORAGE_QUESTIONS, payload });

export const storageQuestionsError = ({ type: STORAGE_QUESTIONS_ERROR });
