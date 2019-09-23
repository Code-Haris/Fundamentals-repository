function playGame() {
var enterHouse = confirm ("You come across a strange house in the woods. Do you want to go in?");

if (enterHouse == true) {
	//entering the house
	do{
    input = prompt("You walk into House and find three Beers. Do you try 1, 2 or 3?");
}while(input == 1 || input == "" );
	var beerChoice = prompt("You walk into House and find three Beers. Do you try 1, 2 or 3?");

	if(beerChoice == 1){
		//choosing a beer
		alert("First Beer was too old and you need medical help!")
	}
	else if (beerChoice == 2){
		alert("The Beer is closed in bottle and you dont have opener");
	}
	else{
		alert("This is Stella Artois and its Perfect!");

	}
}
var chairChoise = promt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose?");
if(chairChoise == "big"){
	alert("The chair is dirty and you wont sit there!");
}
else if(chairChoise == "medium"){
	alert("On the chair is some shit, I dont wont to sit on shit!");
}
else {
	alert("This chair is small but clean, you can sit and enjoy in your beer!");
}

var bedChoice = promt("You walk into next room and see three beds, after beer you feel sleepy so why not?");
if(bedChoice == "big") {
	alert("Its big but there is some bugs and worms there, and I dont have any more fun , going HOme!");
}
else if(bedChoice == "medium"){
	alert("Its some dead animals there, fuck this going home!");
}
else{
	alert("Its cleen and good bed, I will take a nap");
	alert("when you wake up, you see three bears staring at you...");
	alert("You tried to run, but you was too slow, and bears eat you!");
	alert("R.I.P Player");
}


var playagain = confirm("Do you want to try again?");
if(playagain == true) {
	playGame();
}
}
playGame();





