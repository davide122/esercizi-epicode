class User {
  constructor(_FristName, _LastName, _Age, _Location) {
    this.FristName = _FristName;
    this.LastName = _LastName;
    this.age =_Age;
    this.Location =_Location;
  }

  calcoloeta(anotheruser) {
    if (this.age > anotheruser.age) {
      return console.log("io sono più vecchio del 2");
    } else {
      return console.log("io sono più giovane del 2");
    }
  }
}

let User1 = new User("davide", "Marchica" ,10,"palermo")
let user2 = new User("emanele","ciao",20,"giappone")

User1.calcoloeta(user2)

//--------------------------------------------------------------------------------------------

let NomeAnimale = document.getElementById("nome")
let NomePadrone = document.getElementById("propietario")
let Specie = document.getElementById("specie")
let Razza = document.getElementById("razza")
let pulsante = document.getElementById("pulsante")
let lista = document.getElementById("lista")
let ListaSc=[]

class animali {
    constructor(_Nome, _Propietario,_Specie,_Razza ){
        this.Nome=_Nome
        this.Propietario=_Propietario
        this.Specie=_Specie
        this.Razza=_Razza
       
    }

    
    
    
}

function scrivolista(){
    lista.innerHTML=""
    ListaSc.forEach((animali)=>{
        const CreoLista = document.createElement("li")
        CreoLista.innerText= animali.Nome + " "+ animali.Propietario +" "+ animali.Specie +" "+animali.Razza
        lista.appendChild(CreoLista)
       
    })
}

pulsante.addEventListener('click', () => {
    let nuovalista = new animali(
      NomeAnimale.value, 
      NomePadrone.value,
      Specie.value,
      Razza.value,
      
    )
      ListaSc.push(nuovalista)
      console.log(ListaSc)
      scrivolista()
})

