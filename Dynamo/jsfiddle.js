/*
// Post request
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://n8pjy0phb1.execute-api.us-east-2.amazonaws.com/DEV/compare-yourself');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({age: 26, height: 71, income: 2100}));
*/

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://n8pjy0phb1.execute-api.us-east-2.amazonaws.com/DEV/compare-yourself/all');
xhr.onreadystatechange = function (event) {
    console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();