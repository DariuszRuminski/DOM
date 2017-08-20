'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p (paragraf)
var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz nowy text dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

//console.log(newElement);

istniejacyWezel.appendChild(newElement);

//istniejacyWezel.removeChild(newElement); usówamy element