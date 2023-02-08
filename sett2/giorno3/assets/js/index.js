//primo esercizio
{
let numero1 = 1;
let numero2 = 10;
if (numero1 > numero2) {
    document.getElementById("primoVal").innerHTML=numero1;
}

else if (numero1 < numero2) {;
    document.getElementById("primoVal").innerHTML=numero2;
}
}

//secondo esercizio
const numero3 = 2;
let numero4 = 5;
{
if (numero3 > numero4) {
    console.log("NOT EUQUAL");
}

else if (numero3 < numero4) {;
console.log("not equal");
}
}
//terzo esercizio
let divisibile=5
const divisore=5
{
if (divisibile % divisore) {
    console.log("no, non lo è")
}
else {
console.log("si, è divisibile")}
}
//quarto esercizio
let valore1=1;
let valore2=8;
{
if (valore1 ==8 || valore2 ==8||valore1+valore2==8||valore1-valore2==8){
    console.log("si! c'è un 8 e la loro somma o sottrazione fa 8")
}
else{
 console.log("no, mi spiace")}
}
//quinto esercizio
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var spedizione=10
let totalShoppingCart=51
var totale=spedizione+totalShoppingCart

{
if (totalShoppingCart > 50) {
    console.log("il totale è +50, hai ricevuto la spedizione gratuita pagherai:"+totale)
    
}
else if(totalShoppingCart <= 50) {
    console.log("il totale è -50, non hai ricevuto la spedizione gratuita pagherai:"+""+totale)
}
}

//sesto esercizio
var sconto=(totalShoppingCart*0,8)
var totale2=sconto+spedizione
{
if (totalShoppingCart > 50) {
    console.log("il totale è +50, hai ricevuto la spedizione gratuita pagherai:"+""+sconto)
    
}
else if(totalShoppingCart <= 50) {
    console.log("il totale è -50, non hai ricevuto la spedizione gratuita pagherai:"+" "+totale2)
}
}

//settimo esercizio
var numeri= [5,2,1,4,5];
numeri.sort(function (a, b) {
    return b-a;
});
console.log(numeri)

//ottavo esercizio
var algo=3
if (typeof algo==String){
console.log("è un numero")
}
else console.log("non è un numero")

//Nono esercizio
var verifica=10
var risultato=(verifica%2);
if (risultato>0){
    console.log("il numero è dispari")
}
else {
console.log("il numero è pari!")}
    
//decimo esercizio
var val=7
if (val < 10 && val > 5) {
    console.log("Meno di 10");}
   else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
//undicesimo esericizio
const me={
    name:"john",
    lastname: "doe",
    skills: ["javascript","html","css"],

}
me.city="toronto";
console.log(me);

//dodicesimo esercizio
me.lastName="";
console.log(me)

//tredicesimo esercizio

me.skills.pop();
console.log(me)

//Quattordicesimo esercizio
var array=[];
array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
array.push(7)
array.push(8)
array.push(9)
array.push(10)

//quindicesimo esercizio
array[9]
console.log(array)