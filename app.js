let who = ['The dog','My granma','His turtle','My bird'];
let what = ['eat my bread','pissed my shoes','crushed my computer','broked my cellphone'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let boton = document.getElementById("botonNuevaExcusa")

function onLoad () {
    let whoAleatorio = aleatoriedad(who) +  " ";
    let whatAleatorio = aleatoriedad(what) + " ";
    let whenAleatorio = aleatoriedad(when);
    let excusaCompleta = whoAleatorio.concat(whatAleatorio.concat(whenAleatorio));
    document.getElementById("excuse").innerHTML=excusaCompleta;
};

function aleatoriedad (array) {
    let aleatorio = Math.trunc(Math.random() * array.length);
    let textoAleatorio = array[aleatorio];
    return textoAleatorio;
};

boton.addEventListener('click', onLoad)