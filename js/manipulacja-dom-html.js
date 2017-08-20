'use strict'

var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej

var tresc = mainHeader.innerHTML; //Pobieranie treści
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; //Dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej
console.log(link);

link.href = "https://akademia108.pl"; //nadpisujemy atrybut href w link

link.className = 'nowa-klasa';  //nadpisujemy nazwe klasy w linku

link.style.color = '#00ff00'; //dodajemy styl - zmieniamy kolor na zielony