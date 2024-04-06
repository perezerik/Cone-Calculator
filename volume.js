function calculateVolume(radius, height, scoops){
	let volumeSphere = (4/3) * Math.PI * Math.pow(radius, 3);
	if(scoops>1){
		volumeSphere= volumeSphere * scoops;
	}
	let volumeCone = (height/3) * Math.PI * Math.pow(radius, 2);
	let volumeTotal = (volumeSphere + volumeCone).toPrecision(3);
	return volumeTotal;
}
function displayVolume(){
	let radius = Number.parseFloat(document.getElementById("coneRadius").value);
	let height = Number.parseFloat(document.getElementById("coneHeight").value); 
	let scoops = Number.parseFloat(document.getElementById("numScoops").value);
	let answerElement = document.getElementById("answer");
	let volume = calculateVolume(radius, height, scoops);
	if(radius<1 || height<1 || scoops<1){
		answerElement.innerText="None of our values should be less than 1!"; 
	}else if(!(Number.isInteger(scoops))){
		answerElement.innerText="We can only give out full scoops!";
	}else if(scoops>5){
		answerElement.innerText="We cannot give more than 5 scoops!";
	}
	else{
		answerElement.innerText="Cone volume is " + volume + " cm^3";
	}
}
const button = document.querySelector("button");
button.addEventListener("click", displayVolume);
	