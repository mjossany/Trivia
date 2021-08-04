import { storageQuestions } from '../actions';

const fetchQuestions = () => async (dispatch) => {
  const tokenLocalStorageJson = localStorage.getItem('token') || '{}';
  const tokenLocalStorage = JSON.parse(tokenLocalStorageJson);
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`);
  const responseJs = await response.json();
  dispatch(storageQuestions(responseJs));
};

export default fetchQuestions;
