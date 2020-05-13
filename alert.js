var alertBox = document.getElementById('alertBox');

function msj(msj,type=null){
	var createMsj = document.createElement("div");
	
	if(type == 'e' || type == 'error'){	createMsj.setAttribute("class", "alertWrong"); }else{ createMsj.setAttribute("class", "alertFine"); }

		createMsj.innerHTML =  msj +"<button onclick=\"msjRemove(this.parentNode)\">x</button>";	

	alertBox.appendChild(createMsj);

	setTimeout(function(){ 	
		if(alertBox.contains(createMsj)){ alertBox.removeChild(createMsj); }
	}, 5000);
}	

function msjRemove(e){
	alertBox.removeChild(e);
}


function confirmation(mesaje,fn){
	var confirmationBox = document.createElement("div");
	confirmationBox.innerHTML ="<div class='confirmation-modal'><div>"+ mesaje +"<br><br><button id='confirmationCancel'>Cancelar</button> <button id='confirmationOk'>Ok</button></div></div>"; 
	document.body.appendChild(confirmationBox);

	document.getElementById('confirmationCancel').addEventListener("click", ()=>{document.body.removeChild(confirmationBox);});
	document.getElementById('confirmationOk').addEventListener("click", ()=>{fn(); document.body.removeChild(confirmationBox);});
}