export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://ancient-river-94771.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  console.log(results); //eslint-disable-line no-console
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
