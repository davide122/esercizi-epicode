




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
        newdiv.innerHTML =`<div class="card  bg-light bg-gradiend mx-1 text-center" style="width: 300px;">
        <img src="${ev.imageUrl}" class="card-img-top d-flex justify-content-center align-content-center" alt="${ev.description}" style="width:100px;" >
        <div class="card-body">
          <h5 class="card-title">${ev.name}</h5>
          <p class="card-text">${ev.description}</p>
          <a href="dettagli.html?descrizione=${ev._id}" class="btn btn-dark ">modificami </a>
          <a href="" class="btn btn-dark ">remove</a>

        </div>
      </div>`
      let appendi = document.getElementById("appendi")
      appendi.appendChild(newdiv)
    })

  })
  .catch((err) => {
    console.log(err)
  })
}

ok()
