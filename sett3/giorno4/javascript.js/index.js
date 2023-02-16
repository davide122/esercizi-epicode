/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */

       var titolo =  document.querySelector('h1');
       const changeTitle = function (newTitle) {
        
         newTitle.innerHTML = 'Questo è il titolo cambiato';
         
       }
      
 


/* ESERCIZIO 2
Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
*/

const addClassToTitle = function () {
    titolo.classList.add("myHeading")
}

/* ESERCIZIO 3
 Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
*/
var paragrafi = document.querySelectorAll("div p")
const changePcontent = function () {
    paragrafi.forEach(element => {
        element.innerHTML("contenuto diverso")
    });
    
}

/* ESERCIZIO 4
Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
*/

const changeUrls = function () {
    //
}

/* ESERCIZIO 5
Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
*/

const addToTheSecond = function (content) {
    var aggLista = document.getElementById("secondList");
    let newItem = document.createElement("li");
    newItem.textContent = content;
    aggLista.appendChild(newItem);
  };
 

  
      /* ESERCIZIO 6
       Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
      */
       var testo=document.querySelector("div")
       const addParagraph = function (content) {
           let nuovoP=document.createElement("p");
           nuovoP.textContent=content;
           testo.appendChild(nuovoP);
       }
   
        
      

      /* ESERCIZIO 7
       Scrivi una funzione per far scomparire la prima lista non-ordinata.
      */
var seleziona=document.getElementById("firstList")
       const firstUlDisappear = function () {
    seleziona.style.visibility="hidden";
      }
      firstUlDisappear()


      /* ESERCIZIO 8
       Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
      */
       const paintItGreen = function () {
        var allUl = document.querySelectorAll("ul");
        allUl.forEach((element) => {
          element.style.backgroundColor = "green";
        });
      };
      paintItGreen();
      
paintItGreen()
        /* ESERCIZIO 9
       Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
      */

       const makeItClickable = function () {
        titolo.addEventListener('click', function(){
            var randomColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
            titolo.style.cursor="pointer"
            titolo.style.color=randomColor
        })
       }
        makeItClickable()
    
      


          /* ESERCIZIO 10
       Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
      */

       const changeFooterText = function () {
        var cambia=document.querySelector(".footer");
        cambia.addEventListener("click",function(){
        cambia.innerHTML="<p>contenuto cambiato!</p>";
      })
    };
    
changeFooterText()
      /* ESERCIZIO 11
       Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
      */

      const inputField = document.getElementById('input-field')
      inputField.addEventListener("keyup",function(){
        console.log(inputField.value)
      });

      /* ESERCIZIO 12
       Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
      */

      window.onload = function () {
       let inserisci=prompt(" ciao, benvenuto! scrivi qui il tuo nome")
      
      alert("BENVENUTO/A"+" "+inserisci);
      }
