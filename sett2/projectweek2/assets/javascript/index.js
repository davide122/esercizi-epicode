let totale=document.getElementById("valori");
let calco=(numero)=>{
    totale.value+=numero;
}


let Totale=()=>{
    try{
totale.value=eval(totale.value)
}

catch(err){
    alert("errore");
}

}
function cancella(){
totale.value=" ";
}
console.log(totale)

