var alertBox = document.getElementById('alertBox');

function msj(msj,type=null){

	var createMsj = document.createElement("div");

	if(type == 'e' || type == 'error'){
		createMsj.innerHTML = "<div class='alertWrong'>"+ msj +"<button onclick=\"msjRemove(this.parentNode.parentNode)\">x</button></div>";	
	}else{
		createMsj.innerHTML = "<div class='alertFine'>"+ msj +"<button onclick=\"msjRemove(this.parentNode.parentNode)\">x</button></div>";	
	}

	alertBox.appendChild(createMsj);

	setTimeout(function(){ 	
		if(alertBox.contains(createMsj)){ alertBox.removeChild(createMsj); }
	}, 5000);
}	

function msjRemove(e){
	alertBox.removeChild(e);
}


function confirmation(mesaje,fn){
	var createmodal = document.createElement("div");
	createmodal.innerHTML ="<div class='confirmation-modal'><div>"+ mesaje +"<br><br><button class='btn natural' id='ccc'>Cancelar</button> <button class='btn natural' id='ooo'>Ok</button></div></div>"; 
	document.body.appendChild(createmodal);

	document.getElementById('ccc').addEventListener("click", ()=>{document.body.removeChild(createmodal);});
	document.getElementById('ooo').addEventListener("click", ()=>{fn(); document.body.removeChild(createmodal);});
}