'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//console.log(document.documentElement.parentNode);
//console.log(document.documentElement.parentElement);

//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);

//console.log(pierwszyDiv.childNodes);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);