/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
console.log("ESERCIZIO 1")
let mySelf="Davide"
console.log(mySelf)
console.log("-------------------")

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 2")
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']
console.log(pets)
console.log("-------------------")

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/

console.log("ESERCIZIO 3")
pets.push("monkey")
console.log(pets)
console.log("-------------------")


/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
console.log("ESERCIZIO 4")
pets.pop()
console.log(pets)
console.log("-------------------")


/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 5")

let dog = pets.shift()
pets.push(dog)
console.log(pets)
console.log("-------------------")

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
console.log("ESERCIZIO 6-----DA CONTROLLARE")

for(i=0;i<pets.length;i++){
   let trova = pets.find((pets) => pets.slice(0,1)==="c")
   if (trova===true){
    console.log(true)
    }
    else (console.log(false))
   }

console.log("-------------------")
/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
console.log("ESERCIZIO 7")
let mycars =cars[0]
mycars.licenseplate="senza licenza"


let mycarss =cars[1]
mycarss.licenseplate="senza licenza"

let mycarsss =cars[2]
mycarsss.licenseplate="senza licenza"
console.log(cars)
console.log("-------------------")



/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
console.log("ESERCIZIO 8")
const nuovo = {
  brand: "bmw",
  model :"x6",
  color : "black",
  trims :"sportiv, business, speed"
}
function newArray (){
    let newObject = cars
 newObject.push(nuovo)
 return(newArray.length)
}
newArray()
console.log(cars)
console.log("-------------------")
   

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
console.log("ESERCIZIO 9")
let justFirstTrims = [

]

function salvaElemento (){
    for (i=0;i<cars.length;i++){
        justFirstTrims.push(cars[i].trims[0])
       
    }
    return justFirstTrims
}
console.log(salvaElemento())
console.log("-------------------")
// inserisci la tua funzione qui

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 10")
cars.forEach((auto) => {
    if (auto.color.length <= 4) {
      return console.log("Fizz");
    } else {
      return console.log("Buzz");
    }
  });

console.log("-------------------")
/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/ 
console.log("ESERCIZIO 11");

let filtra = cars.filter((auto) => {
  return auto.trims.length > 2;
});
console.log(filtra)
console.log("-------------------")

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
