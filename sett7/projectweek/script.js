




function ok (){
fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method:"GET",
   
headers: {
   
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjQyNWY4MWI0MjAwMTM5YjI3ZDEiLCJpYXQiOjE2NzkwNDE1NzMsImV4cCI6MTY4MDI1MTE3M30.Qs2qb-R1HLs4mThvWR2VDXB77ghdDOTdrOgoxbhcI74",
'content-type':"application/json",
},
}
)

.then((response) => {
    console.log(response)
    if (response.ok) {
      return response.json()
    } else {
      return new Error('Errore nella gestione della chiamata')
      // e vengo catapultato nel blocco catch
    }
  })
 
  .then((events) => {
    console.log('EVENTI', events)
    events.forEach((ev)=>{
        console.log(ev)
        const newdiv = document.createElement("div")
        newdiv.classList.add("col")
        newdiv.innerHTML =`
        
        <div class="col col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
        <div class="card " style="width: 300px;">
        <img src="${ev.imageUrl}" class="card-img-top" alt="..."  >
        <div class="text-center amazonBlu">
          <h5 class="amazonBlu my-3">${ev.name}</h5>
          <p class="card-text amazonBlu">${ev.description}</p>
          <p class="card-text amazonBlu">${ev.price}$</p>
   <div class="d-flex mx-1 justify-content-center">
          <a href ="dettagli.html?descrizione=${ev._id}" class=" d-flex btn btn-warning my-1 justify-content-center align-items-center">dettagli</a>
          <a href ="backoffice.html?ripopola=${ev._id}" class=" d-flex btn btn-danger my-1 mx-2 justify-content-center align-items-center">Modifica</a>

</div>
          </div>
        <div class="card-footer text-center amazonCard" style="">
        <small class="text-light" >last update:${ev.updatedAt.slice(0,10)+" " + ev.updatedAt.slice(11,19)}</small>
        </div>
  
    
          </div>
          
    </div>
    `
      let nascondi = document.getElementById("nascondi")
      nascondi.classList.add("d-none")
      let appendi = document.getElementById("appendi")
      appendi.appendChild(newdiv)
    })

  })
  .catch((err) => {
    console.log(err)
  })
}

ok()
