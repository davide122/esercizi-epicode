var i=0;
document.getElementById('aggiungi').addEventListener('click',function(){
var task=document.getElementById('testo').value;

    if(task==""){
        window.alert('La task deve avere una descrizione!')
    }else{
        var nuovaTask=document.getElementById("lista");
        nuovaTask.innerHTML+=`<div id="${i}" class="non"><li onClick="fatto(event)" id="${i}"> ${task} <button type="button" class="delete" id="b_${i}" onClick="cancella(${i})">Cancella</button></li></div>`;
        i++;
        document.getElementById('testo').value="";
    }
})

function cancella(_indice,_div){
var elCanc=document.getElementById(`${_indice}`);
return elCanc.remove();

}

const fatto=function(event){
   
    if(event.target.className=="fatto")
    {
        event.target.classList.remove('fatto');
    }else{
          event.target.classList.add('fatto');
    }
}