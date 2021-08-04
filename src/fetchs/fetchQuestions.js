import { storageQuestions, storageQuestionsError } from '../actions';

const fetchQuestions = () => async (dispatch) => {
  const tokenLocalStorageJson = localStorage.getItem('token') || '{}';
  const tokenLocalStorage = JSON.parse(tokenLocalStorageJson);
  const errorNumber = 3;
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`);
  if (response.response_code === errorNumber) return dispatch(storageQuestionsError());
  const responseJs = await response.json();
  console.log(responseJs);
  dispatch(storageQuestions(responseJs));
};

export default fetchQuestions;
