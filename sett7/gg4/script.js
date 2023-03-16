const autorizzazione = "FIto8hVMFmoTSmSxEwE7pmoeEOAggRVEqJSsbvPdMCndh9vWVQ7siPGi"



fetch("https://api.pexels.com/v1/search?query=tiger",{
    Authorization: autorizzazione,

})


.then((response) => {
  console.log('FINITA LA FETCH!')
  console.log(response)
  if (response.ok) {
    return response.json()
  } else {
    // controllo aggiuntivo su response.ok
    // questa riga vi fa finire automaticamente nel .catch()
    return new Error('Problema nel parsing della response')
  }
})
.then((photos) => {
  console.log("ora è finita l'estrapolazione dei dati")
  console.log('photos', photos)


})
.catch((err) => {
  console.log(err)
})