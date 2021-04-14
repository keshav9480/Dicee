
var rndNum1 = Math.floor(Math.random() * 6) + 1;
var imgSource1 = "images/dice"+rndNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgSource1)

var rndNum2 = Math.floor(Math.random() * 6) + 1;
var imgSource2 = "images/dice"+rndNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSource2);

if (rndNum1 > rndNum2){
	document.querySelector("h1").innerHTML = "Congratulations player 1.. You Won!!!!"
}
else if (rndNum1 < rndNum2) {
	document.querySelector("h1").innerHTML = "Congratulations player 2.. You Won!!!!"
}
else {
	document.querySelector("h1").innerHTML = "Match is Draw"
}
