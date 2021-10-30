"use strict";

console.log("hello2");

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
