let nome = document.getElementById("nome")
let salva = document.getElementById("salva")
let rimuovi = document.getElementById("rimuovi")
let valore = document.getElementById("valore")

function salvataggio(){
   const nomesalvato = salva.value=nome.value;
    console.log(salva.value)
    localStorage.setItem("nome:", nomesalvato )
    nome.value=""
}

salva.addEventListener("click",salvataggio)
rimuovi.addEventListener("click", elimina)
salva.addEventListener("click",scrivi)
//-----------fine salvataggio--------------------




//-----------Rimuovere dal local storage----------

function elimina(){
     localStorage.removeItem("nome:")
     rimuovititolo()
     alert("hai rimosso correttamente il valore in localstorage")
}

window.onload = () =>{
    let appendi = localStorage.getItem("nome:")
    crea.textContent=appendi
    valore.appendChild(crea)
}

//--------------
 let crea = document.createElement("h2")
function scrivi(){
   let appendi = localStorage.getItem("nome:")
   crea.textContent=appendi
   valore.appendChild(crea)
}



function rimuovititolo (){
    crea.textContent=""
}

//----------------------------------------------------------

let timerOutput = document.getElementById("timer1")
let timerInput = document.getElementById("scrivi")
let pulsante = document.getElementById("incrementa1")

function salvaNumero (){
    let numero = timerInput.value
    console.log(numero)
}

function incrementa (){
    for (i=0;i-salvaNumero;i++){
        timerOutput=i++
    }
}

pulsante.addEventListener("click",salvaNumero)
pulsante.addEventListener("click",incrementa)