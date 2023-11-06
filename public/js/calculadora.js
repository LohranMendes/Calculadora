var resul = 0;
var numero, numero2;
var op;
var i = 0;
var comp = 1.1 + 2.2;
var comp2 = 1.1 + 6.6;


function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
    resul = 0;
}

function del(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function soma(){
    op = "soma";
    numero = parseFloat(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = "";
}

function sub(){
    op = "sub";
    numero = parseFloat(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = "";
}

function multi(){
    op = "multi";
    numero = parseFloat(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = "";
}

function div(){
    op = "div";
    numero = parseFloat(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){

    if(op === "soma"){
            numero2 = parseFloat(document.getElementById('resultado').innerHTML);
            resultado = numero2 + numero;
            if(resultado == comp || resultado == comp2){
                document.getElementById('resultado').innerHTML = resultado.toFixed(1).toString();
            } else {
                document.getElementById('resultado').innerHTML = resultado.toString();
            }
    }

    if(op === "sub"){
        numero2 = parseFloat(document.getElementById('resultado').innerHTML);
        resultado = numero - numero2;
        if(resultado == comp || resultado == comp2){
            document.getElementById('resultado').innerHTML = resultado.toFixed(1).toString();
        } else {
            document.getElementById('resultado').innerHTML = resultado.toString();
        }
    }

    if(op === "multi"){
        numero2 = parseFloat(document.getElementById('resultado').innerHTML);
        resultado = numero * numero2;
        if(resultado == comp || resultado == comp2){
            document.getElementById('resultado').innerHTML = resultado.toFixed(1).toString();
        } else {
            document.getElementById('resultado').innerHTML = resultado.toString();
        }
    }

    if(op === "div"){
        numero2 = parseFloat(document.getElementById('resultado').innerHTML);
        resultado = numero / numero2;
        if(resultado == comp || resultado == comp2){
            document.getElementById('resultado').innerHTML = resultado.toFixed(1).toString();
        } else {
            document.getElementById('resultado').innerHTML = resultado.toString();
        }
    }
}