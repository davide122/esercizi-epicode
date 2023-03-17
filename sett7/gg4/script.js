let autorizzazione = "FIto8hVMFmoTSmSxEwE7pmoeEOAggRVEqJSsbvPdMCndh9vWVQ7siPGi"
let album = document.getElementById("foto-album")
let url = "https://api.pexels.com/v1/search?query=horse";
let url2= "https://api.pexels.com/v1/search?query=dog"
let pulsante1 = document.getElementById("pulsante1")

const arrayDF = (foto) =>{
  album.innerHTML=``;
  foto.foreach=(foto =>{
    let newalbum = document.createElement("div");

    newalbum.classList.add('col-md-4');
    newalbum.innerHTML=`<div class="card mb-4 shadow-sm">
    <img src="${foto.src.original}" height="200px">
    <div class="card-body">
      <h5 class="card-title">${foto.alt}</h5>
      <p class="card-text">
        Photo description
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <div type="button" class="btn btn-sm btn-outline-secondary">
            View
          </div>
          <div type="button" id="hide" onclick="nascondiCard()" class="btn btn-sm btn-outline-secondary">
            HIDE
          </div>
        </div>
        <small class="text-muted">${foto.id}</small>
      </div>
    </div>
  </div>`;
  album.appendChild(newalbum)
  });
}

const carica =()=>{
  fetch(url,{
    headers:{
      Authorization: autorizzazione
    }

  })
  .then((Response)=>{
    return Response.json();
   
  })
   .then((foto)=>{
    let arraydf = foto.photos;
console.log(arraydf)
arrayDF(arraydf);
   })


.catch((err)=>{
return console.log("ERROR")
})
}













pulsante1.addEventListener("click",carica)
pulsante1.addEventListener("click",arrayDF)