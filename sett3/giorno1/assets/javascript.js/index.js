/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("esercizio 1")
let l1 =10;
let l2=10;
function area(l1,l2){
    return l1 * l2;
    
}
console.log(area(l1,l2))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("esercizio 2")
function crazysum (n1,n2){
if (n1==n2||n2==n1)
return (n1+n2)*3
else return n1+n2
} 
console.log(crazysum(1,2))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("esercizio 4")
function boundary (Num1){
    if(Num1>=20&&Num1<=100)
    return (true)
    else if (Num1==400)
    return ("è uguale a 400")
    else
    return("nessuno")
    

}
console.log(boundary(20))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("esercizio 6")
function check3and7(parametro1){
if (parametro1%3||parametro1%7)
return ("è un multiplo di 3 o di 7 :)")
else
return("non è un multiplo di 3 o di 7 :(")
}

console.log(check3and7(1))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("esercizio 7")
var nome = [
    {uno:"E"},
    {due:"p"},
    {tre:"i"},
    {quattro:"c"},
    {cinque:"o"},
    {sei:"d"},
    {sette:"e"}
]
function reverseString(nome){
    return nome.reverse;
}
console.log(reverseString(nome));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("esercizio 10")
function giveMeRandom(n){
    var array=[];
    for (let i =0; i<n; i++){
        array.push(Math.floor(Math.random()*11));
    }
return array
}
console.log(giveMeRandom(10))



/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log("esercizio 2 extra")
let shoppingCart =[
    {prezzo:1, nome:"pane", id:001, quantita:2},
    {prezzo:2, nome:"pasta", id:002, quantita:3},
    {prezzo:10, nome:"formaggio", id:003, quantita:1},
    {prezzo:2, nome:"insalata", id:004, quantita:1},
    {prezzo:2, nome:"pomodori", id:005, quantita:5},
    
    ]
    
    function shoppingCartTotal(){
        var totalesupermercato=0;
        shoppingCart.forEach((Element)=>{
            totalesupermercato+=Element.prezzo*Element.quantita;
        });
        return("il totale è"+""+ " "+totalesupermercato)
    }
    console.log(shoppingCartTotal());

    /* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
var data1 = 20240000;
var data2 = 20230000;
 
const differenza = Math.floor((data1 - data2) / (1000 * 60 * 60 * 24));
console.log(differenza);