/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.info("Esercizio A")
a = 10;
b = 20;
let sum = a + b;
console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.info("Esercizio B")

var random = Math.round(Math.random() * 20);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.info("Esercizio C")
const me={
  nome:"davide",
  cognome:"marchica",
  anni:20
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.info("Esercizio D")
delete me.age;
console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.info("Esercizio E")
me.skills=["javascript","html","css"];
console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F")
me.skills.push["ciao!"]
console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.info("Esercizio G")

delete me.skills;
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.info("Esercizio 1")

function dice() {
  console.log(random = Math.round(Math.random(1) * 6))

}
dice();
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.info("Esercizio 2")

function whoIsBigger() {
  var num1 = 10
  var num2 = 11
  if (num1 > num2)
    console.log(num1 + "" + "è il maggiore tra i due")
  else
    console.log(num2 + " " + "è il maggiore tra i due")
}
whoIsBigger()



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.info("Esercizio 3")

var stringa1 = "i, love ,coding";
var stringaSplit = stringa1.split(",");
//!dichiarazione variabili globali
console.info("Esercizio 3");
function splitMe() {
  console.log(stringaSplit)
}
splitMe();

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.info("Esercizio 4")

var stringa = "ciao";
var nuovo = stringa.slice(1, 4);
var nuovo1 = stringa.slice(0, -1);
const booleano = false

function deleteOne() {

  if (booleano == true)
    console.log(nuovo)

  else
    console.log(nuovo1)
}
deleteOne()


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.info("Esercizio 5");
var testo1 = "i have 4 dogs";

function onlyLetters() {
  var testo2 = testo1.replace(/[0-9]?/g, "");
  console.log(testo2);
}
onlyLetters();

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.info("Esercizio 6");

var mail = "davidemarchica277gmail.com";
function isThisAnEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    console.log(true)
  else
    console.log(false)
}
isThisAnEmail()
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.info("Esercizio 7");

function nuovadata() {
  var settimana = new Date()
  var giorno = settimana.getDate()
  console.log(giorno)

}
nuovadata()
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("esercizio 8")
function rollTheDices(_n){
  let valori={
    num:0,
    values:[]
  }
  for(let i=0;i<_n;i++){
    num=(dice())
    valori.values.push(num)
    valori.sum+=num;

  }
  console.log(valori)
}
rollTheDices(5)



/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
var prima = '02/25/2020';
var seconda = '02/23/2020';

function howManyDays() {
  var prima1 = new Date(prima);
  var seconda1 = new Date(seconda);
  const differenza = Math.floor((prima1 - seconda1) / (1000 * 60 * 60 * 24));
  console.log(differenza);
}
howManyDays()
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("esercizio 10")
function isTodayMyBirthday() {
  var compleanno = new Date("07/27/2002")
  var giornocompleanno = compleanno.getDay()
  var mesecompleanno = compleanno.getMonth()
  var anno = new Date("07/27/2024")
  var giorno = anno.getDay()
  var mese = anno.getMonth()

  if (giornocompleanno == giorno && mesecompleanno == mese)
    console.log("auguri, oggi è il tuo compleanno!!!!")
  else
    console.log("falso")
}
isTodayMyBirthday()
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("esercizio 11")
const oggettoo = {
  nome : '',
  congnome :'',
  indirizzo :'',
  sesso : '',
}
const deleteProp = (oggettoo,_string) =>{
    for  (i = 0;i < oggettoo.length;i++){
      if (oggettoo.i == _string){
        delete oggettoo.i
        console.log(oggettoo)
      }else{

      }
    }
}
deleteProp(oggettoo,'nome')






/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("esercizio 12")

function newestMovie (){
  for (let i=0;i<movies.length;i++)
  var b=movies[i].Year

  console.log(b)
}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("esercizio 13")

function countMovies (){
  for (let i=0; i<movies.length;i++)
  var a = movies.length
console.log("ci sono"+" "+a+" " + " "+"film")
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("esercizio 14")

var miaArray=[]
function onlyTheYears (){
  for (let i=0;i<movies.length;i++){
  var c=movies[i].Year
  miaArray.push(movies[i].Year);
  }
  console.log(miaArray)
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
let filmMillennio=[]
console.log("ESERCIZIO 15")
function onlyInLastMillennium (){
  for(let i=0; i<movies.length;i++)
  if (movies[i].Year<2000)
  filmMillennio.push(movies[i].title+" "+movies[i].Year);
  console.log(filmMillennio)
}
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(){
  for (let i = 0; i<movies.length;i++){
  var somma = (movies[i].Year+movies[i].Year)

  }
  console.log(somma);

}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchBytitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchBytitle(_titolo){
  for (i=0;i<movies.length;i++){
    if (movies[i].title.includes(_titolo)){
      console.log(movies[i].title)
    }
  }
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
match=[]
unmatch=[]
filmarray={
  match,
  unmatch
}
function searchAndDivide (_tit){
for (i=0; i<movies.length;i++){
  if(movies[i].title.includes(_tit)){
    match.push(movies[i].title)}
    else
    unmatch.push(movies[i].title)
    
    
  }
}
console.log(filmarray);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex (numeroa){
  for (i=0; i<movies.length;i++){
if (numeroa==movies[i]){
  delete movies[i]
}
  }

console.log(movies)
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function trovacontainer(){
  document.getElementById("#container")
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selezionatd (){
  document.querySelectorAll("td")

}
trovacontainer()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function cicloscrivi (){
  var target = document.querySelectorAll("td")
  for (i=0; i<target.length;i++){
    target[i].innerHTML="new";
  }
  
};
cicloscrivi()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function sfondocambia (){
  var link = document.querySelectorAll("a")
  for (i=0; i<link.length;i++){
    link[i].style.backgroundcolor="red"
  }
  
};
sfondocambia()
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungielemento (){
  let myList = document.getElementById("myList");
  let newLi = document.createElement("li");
  newLi.innerHTML = "Nuovo elemento della lista";
  myList.appendChild(newLi);
};


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function eliminalista (){
  let myList = document.getElementById("myList");
  let newLi = document.removeChild("li");
  newLi.innerHTML = "";
  myList.removeChild(newLi);
};
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungeretag (){
  let tuttitr=document.querySelectorAll("tr")
  for (let i=0; i<tuttitr.length;i++){
    tuttitr[i].classlist.add("classseeee")
  }
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(_n){
  let myTree = "";
  for (let i = 0; i < _n; i++) {
    console.log(myTree);
    myTree += "*";
  }
  console.log(myTree);
};

halfTree(3);



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree (_n){
  let myTree = "*";
  let space = " ";
  let k = _n - 1;
  for (let i = 0; i < _n; i++) {
    console.log(space.repeat(k), myTree);
    myTree += "**";
    k--;
  }
};
tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
var conta=0
function isItPrime(_p){
while(conta <=1 && div <= n/2){
  if(n%div ==0){
    conta++;
  }
  div++;
}

 
}




/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
countMovies()
newestMovie()
onlyTheYears()
onlyInLastMillennium()
sumAllTheYears()
searchBytitle("lord")
searchAndDivide()
removeIndex()
