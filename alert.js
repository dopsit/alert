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