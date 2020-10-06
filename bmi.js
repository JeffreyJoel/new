function output(){

	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;

	var selectWeight = document.getElementById("selectWeight").value;
	var selectHeight = document.getElementById("selectHeight").value;

	if(selectWeight == 0 && selectHeight == 0){
		var out = (weight)/(height*height);
		document.getElementById("para").value = "Your Body Mass Index is "+ out +"";
		console.log(out);
	}
	else if(selectWeight == 1 && selectHeight == 1 ){
		var out = ((weight)/(height*height))*703;
		document.getElementById("para").textContent = "Your Body Mass Index is "+ out +"";
		console.log(out);
	}

	else if(selectWeight == 0 && selectHeight == 2 ){
		var out = (weight)/(2.61*(height*height));
		document.getElementById("para").textContent = "Your Body Mass Index is "+ out +"";
		console.log(out);
	}
	else {
		alert("Please select the appropriate units")
	}



	};

	

	var btn = document.getElementById("btn");
	btn.addEventListener('click', output)