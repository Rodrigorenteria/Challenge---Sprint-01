var textoIngresado = document.getElementById("txtIngresado");
var btnEncriptar = document.getElementById("encriptar")
var btnDesencriptar = document.getElementById("desencriptar")
var btnCopiar = document.getElementById("copiar")
var resultado = document.getElementById("resultado")
var ningunMsg = document.getElementById("ninguntxt")
var imagen = document.getElementById("mono")
function copiarTexto(){
    var texto = resultado.innerHTML;
    texto = texto.replace(/<br>/g, " ");
    navigator.clipboard.writeText(texto);
}

function reemplazarLetras(){
    var keys = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };
    var texto = textoIngresado.value;
    texto = texto.toLowerCase();
    if(textoIngresado.value == ""){
        alert("Ups! Parece que falta algo, favor de ingresar un texto");
    } else{
        for(var key in keys){
            texto = texto.replace(new RegExp(key,"g"), keys[key]);
        };
        resultado.innerText = texto;
        btnCopiar.style.display = "flex";
        ningunMsg.style.display = "none";
        imagen.style.display = "none";
    }
}   

function reemplazarPalabras(){
    var keys = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };
    var texto = textoIngresado.value;
    texto = texto.toLowerCase();
    if(textoIngresado.value == ""){
        alert("Ups! Parece que falta algo, favor de ingresar un texto");
    } else{
        while(true){
            var encontrado = false;
            for(var key in keys){
                if(texto.includes(key)){
                    texto = texto.replace(new RegExp(key,"g"), keys[key]);
                    encontrado = true;
                } 
            };
            if (!encontrado){
                break;
            };
        };   
        resultado.innerText = texto;
        btnCopiar.style.display = "flex";
        ningunMsg.style.display = "none";
        imagen.style.display = "none";
    }
}   

btnEncriptar.addEventListener('click', reemplazarLetras)
btnDesencriptar.addEventListener('click', reemplazarPalabras)
btnCopiar.addEventListener('click', copiarTexto)