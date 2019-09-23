function playGame() {
	var enterCabin = confirm("You across a strange house in the woods. Do you want to go in?");

	if(enterCabin == true) {
		var beerChoice = prompt("You walk into House and find three Beers. Do you try 1, 2 or 3?");
		if(beerChoice == 1) {
			alert("First Beer was too old and you need medical help!")
		}
		else if(beerChoice == 2) {
			alert("The Beer is closed in bottle and you dont have opener");
		}
		else{
			alert("This is Stella Artois and its Perfect!");

			var chairChoice = prompt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose 'Big', 'medium', 'small'?");
			if(chairChoice == "big") {
				alert("The chair is dirty and you wont sit there! Fuck this going Home!");
			}
			else if(chairChoice == "medium") {
				alert("On the chair is some shit, I dont wont to sit on shit! I m going Home!");
			}
			else{
				alert("This chair is small but clean, you can sit and enjoy in your beer!");
				var bedChoice = prompt("You walk into next room and see three beds, after beer you feel sleepy so why not take a nap? choose 'big', 'medium' or 'small'");
				if(bedChoice == "big"){
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
			}
		}
	}

else{
	alert("You are to afraid to go in House and you went home and cry!");
}

var playAgain = confirm("You wanna play again?");
if(playAgain == true){
	playGame();
}
}
playGame();