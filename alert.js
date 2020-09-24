function mssg(message,type=null){
	const alertBox = document.getElementById('alertBox');
	
	const createAlert = document.createElement("DIV");
	
	createAlert.setAttribute("class", (type === 'e' || type === 'error')? 'alertWrong' : 'alertFine' ); 
		
	createAlert.innerHTML = `<button class='alertBox_btn' onclick="this.parentNode.remove()">x</button> ${message}`;	

	alertBox.appendChild(createAlert);

	setTimeout(function(){ 	
		alertBox.contains(createAlert) && createAlert.classList.add('alertHidden')
	}, 5300);

	setTimeout(function(){ 	
		alertBox.contains(createAlert) && alertBox.removeChild(createAlert)
	}, 6000);
}
