fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())
  .then((libreria) => {
    console.log(libreria);

    const card = document.getElementById("libreria-container");
    card.innerHTML = "";

    libreria.forEach((libri) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML =  `
        <div class="card mx-1 my-2  rounded-4 overflow-hidden">
        <img src = ${libri.img}>
            <div class="card-body bg-dark text-light text-center">
                <p class="card-title">${libri.title}</p>
                <p class="badge bg-dark">${libri.price}</p >
                <p class="card-text">${libri.category}</p>
                <button class="custom border border border-light bg-danger rounded-3"> rimuovi </button>
                <button class="custom border border border-light bg-success rounded-3"> aggiungi al carrello </button>

            </div>
        </div> `
            ;
            const elimina = col.querySelector(".custom");
      elimina.onclick = () => {
        col.remove();
      };
      const aggiungi = col.querySelector(".bg-success")
      aggiungi.onclick=() =>{
       const ok = localStorage.setItem("Ciao",`${libri.title}`)
       const prezzo = localStorage.setItem("prezzo",`${libri.price}$`)


       const dove = document.getElementById("carrello")
const x = document.createElement("div")
       const a = document.createElement("p")
       const b = document.createElement("h6")
       b.innerText=localStorage.getItem("Ciao")
       a.innerText = localStorage.getItem("prezzo")  
       dove.appendChild(x)
       x.appendChild(a)
       x.appendChild(b)

      
}
      

      card.appendChild(col);
    });
  })
  .catch((error) => console.log("CATCH", error))


let pulsantechiudi = document.getElementById("pulsanteCarrello")
console.log(pulsantechiudi)
let carrellino = document.getElementById("carrello")
pulsantechiudi.onclick=()=>{
  carrellino.classList.add("rimuovi")


  
}

let pulsanteapri = document.getElementById("pulsanteCarrellonext")
let carrello = document.getElementById("carrello")
pulsanteapri.onclick=()=>{
  carrello.classList.remove("rimuovi")
}

  
