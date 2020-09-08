function mssg(mssg,type=null){
	const alertBox = document.getElementById('alertBox');
	
	const createMssg = document.createElement("DIV");
	
	if(type === 'e' || type === 'error'){	
		createMssg.setAttribute("class", "alertWrong"); 
	}else{ 
		createMssg.setAttribute("class", "alertFine"); 
	}

	createMssg.innerHTML = `<button class='alertBox_btn'>x</button> ${mssg}`;	

	alertBox.appendChild(createMssg);


	setTimeout(function(){ 	
		if(alertBox.contains(createMssg)){ createMssg.classList.add('alertHidden') }
	}, 5300);


	setTimeout(function(){ 	
		if(alertBox.contains(createMssg)){ alertBox.removeChild(createMssg); }
	}, 6000);


	createMssg.firstChild.addEventListener('click',(e)=>{
		alertBox.removeChild(e.target.parentNode)
	})
}
