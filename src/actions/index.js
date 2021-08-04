export const STORAGE_PLAYER_INFO = 'STORAGE_PLAYER_INFO';
export const STORAGE_QUESTIONS = 'STORAGE_QUESTIONS';
export const STORAGE_QUESTIONS_ERROR = 'STORAGE_QUESTIONS_ERROR';

export const storagePlayerInfo = (payload) => ({ type: STORAGE_PLAYER_INFO, payload });

export const storageQuestions = (payload) => ({ type: STORAGE_QUESTIONS, payload });

export const storageQuestionsError = ({ type: STORAGE_QUESTIONS_ERROR });
