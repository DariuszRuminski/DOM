function klikHeader(){
    console.log("Kliknales w header");
}

function alarm(event){
    event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log("Kliknięto link");
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

document.getElementById("title-header").onclick = klikHeader; //wywołaj funkcje na elemencie o id 'title-header'

var paragraf = document.getElementsByTagName('p')[0];

paragraf.addEventListener("click", klikHeader); 
// document.getElementsByTagName('p')[0].addEventListener("click", klikHeader);

