import 'whatwg-fetch';

// https://openparking.stockholm.se/LTF-Tolken/v1/pmotorcykel/all?apiKey=b8f1b2b8-63c4-4ebf-83f6-7cda4ef4190f&outputFormaT=json

export function getUsers(){
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
