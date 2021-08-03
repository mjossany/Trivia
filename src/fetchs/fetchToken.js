const URL = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const response = await fetch(URL);
  const responseJs = await response.json();
  const { token } = responseJs;
  return token;
};

export default fetchToken;
