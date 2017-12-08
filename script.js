var name = "John Doe";
var age = 20;
var country ="Austria";
var horse_power = 250;

function calculateInsurance(Name,Age,Country,Horse_power){
	var insurance = Horse_power * 100 / Age + 150;
	return name + ", your Insurance would be " + insurance
};
document.getElementById("result").innerHTML 
= calculateInsurance(name,age,country,horse_power);