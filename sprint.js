function encriptar() {
    var texto = document.getElementById('textarea').value;            
    var texto = texto.replace(/a/g, '#');
    var texto = texto.replace(/e/g, '@');
    var texto = texto.replace(/i/g, '%');
    var texto = texto.replace(/o/g, '&');
    var texto = texto.replace(/u/g, '=');
    var texto = texto.replace(/#/g, 'ai');
    var texto = texto.replace(/@/g, 'enter');
    var texto = texto.replace(/%/g, 'imes');
    var texto = texto.replace(/&/g, 'ober');
    var texto = texto.replace(/=/g, 'ufat');
    document.getElementById('result').innerHTML=texto;
    document.getElementById('imagentexto').style.display='none';            
}

function desencriptar() {
    var texto = document.getElementById('textarea').value;
    var texto = texto.replace(/ai/g, '#');
    var texto = texto.replace(/enter/g, '@');
    var texto = texto.replace(/imes/g, '%');
    var texto = texto.replace(/ober/g, '&');
    var texto = texto.replace(/ufat/g, '=');
    var texto = texto.replace(/#/g, 'a');
    var texto = texto.replace(/@/g, 'e');
    var texto = texto.replace(/%/g, 'i');
    var texto = texto.replace(/&/g, 'o');
    var texto = texto.replace(/=/g, 'u');
    document.getElementById('result').innerHTML=texto;
    document.getElementById('imagentexto').style.display='none';            
}

function copiar() {
    var texto = document.getElementById('result').innerHTML;
    document.getElementById('textarea').value=texto;    
}
