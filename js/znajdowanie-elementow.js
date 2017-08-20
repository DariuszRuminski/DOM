"use strict";

var parFirst = document.getElementById("parFirst");
console.log(parFirst);

var linki = document.getElementsByClassName("superlink");
console.log(linki);

var linkiPoTagu = document.getElementsByTagName("a");
console.log(linkiPoTagu);

var divPoId = document.querySelector("#parSecond");
console.log(divPoId);

var pierwszyLinkPoSelektorze = document.querySelector(".superlink");
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll(".superlink");
console.log(linkiPoSelektorze);

for(var i = 0; i < linkiPoSelektorze.length; i++)
{
    console.log(linkiPoSelektorze[i]);
}

linkiPoSelektorze.forEach(function(link, i){
    console.log(link.outerHTML);
    console.log(link.innerHTML);
});

