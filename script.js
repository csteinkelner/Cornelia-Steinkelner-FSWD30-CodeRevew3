var name = "John Doe";
var age = 20;
var country ="Austria";
var horse_power = 250;

function calculateInsurance(Name,Age,Country,Horse_power){
	var insurance = Horse_power * 100 / Age + 150;
	
	document.getElementById("result").innerHTML = name + ", your Insurance would be " + insurance
};
