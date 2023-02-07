//prima parte dell'esercizio, utilizzo di var-let-const
var nome = "Aldo ";
let chi ="cliente ";
const num=3.14;
document.getElementById("concatena").innerHTML=nome+", "+chi+", "+num;
//-------seconda parte dell'esercizio 1/1
var tutti=nome+", "+chi+", "+num;
document.getElementById("concatena2").innerHTML=tutti;
//terza parte dell'esercizio 1/2

var Nome="Mario";
let Nome1="Carla";
document.getElementById("var").innerHTML=Nome;
document.getElementById("let").innerHTML=Nome1;
document.getElementById("final").innerHTML=Nome;
//terza parte dell'esercizio 2/2

document.getElementById("let2").innerHTML=Nome;
document.getElementById("let3").innerHTML=Nome1;
document.getElementById("final2").innerHTML=Nome1;
//quarta parte dell'esercizio 1/6

let valore=15;
document.getElementById("iniziale").innerHTML="Valore iniziale"+": "+valore;
//quarta parte 2/6

var incremento=valore+valore;
var incremento2=incremento;
incremento2++;
document.getElementById("valore1").innerHTML="addizione e incremento"+": "+incremento+","+incremento2;

//quarta parte 3/6

var sottrazione=valore-10
var decremennto=sottrazione
decremennto--;
document.getElementById("valore2").innerHTML="sottrazione e decremento"+": "+sottrazione+","+decremennto;

//quarta parte 4/6
var moltiplicazione=valore*3
document.getElementById("valore3").innerHTML="moltiplicazione"+": "+moltiplicazione;

//quarta parte 5/6

var divisione= valore/3
document.getElementById("valore4").innerHTML="Divisione"+": "+divisione;

//quinta parte 6/6  
document.getElementById("valore5").innerHTML="Concatenazione"+": "+valore +" "+"è un numero"




