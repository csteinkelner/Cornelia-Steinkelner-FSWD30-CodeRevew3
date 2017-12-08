var name = "John Doe";
var age = 20;
var country ="Austria";
var horse_power = 250;
/*var horse_power = Number(document.forms["f"]["text4"].value);
	var age = Number(document.forms["f"]["text2"].value);
	var country =document.getElementById("text3").value;*/

function calculateInsurance(Name,Age,Country,Horse_power){
	var insurance = Horse_power * 100 / Age + 150;
	//var name = document.getElementById("text1").value;
	
	document.getElementById("result").innerHTML = name + ", your Insurance would be " + insurance
};



