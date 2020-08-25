const alertBox = document.getElementById('alertBox');

function mssg(mssg,type=null){
	const createMssg = document.createElement("div");
	
	if(type == 'e' || type == 'error'){	createMssg.setAttribute("class", "alertWrong"); }else{ createMssg.setAttribute("class", "alertFine"); }

		createMssg.innerHTML =  mssg +"<button class='alertBox_btn' onclick=\"mssgRemove(this.parentNode)\">x</button>";	

	alertBox.appendChild(createMssg);

	setTimeout(function(){ 	
		if(alertBox.contains(createMssg)){ alertBox.removeChild(createMssg); }
	}, 5000);
}	

function mssgRemove(e){
	alertBox.removeChild(e);
}
