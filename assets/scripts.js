// *******************************************************
// GLOBAL VARIABLES
// *******************************************************
var userGuess;
var correctGuess;
var wrongGuesses;
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];

//options...
var easyList = ["roy", "jim", "pam"];
var intermediateList = ["bears", "beets", "battlestar"];
var hardList = ["yesh", "dundee", "scarn"];

// ask the user's name only on the homepage...
$( function() {
	if ($('body').is('#welcome')) {
		var name = prompt("What is your name?");
		$("#userName").html(name);
	}
});

// *******************************************************
// EASY MODE
// *******************************************************
$( function() {
	if ($('body').is('#easy')) {
		function startGame() {

		chosenWord = easyList[Math.floor(Math.random() * easyList.length)];

		lettersInWord = chosenWord.split("");

		numBlanks = lettersInWord.length;

		console.log(chosenWord);

		};
		startGame();

		$("#easy").keyup(function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
		});
	}
});
// *******************************************************
// INTERMEDIATE MODE
// *******************************************************
$( function() {
	if ($('body').is('#intermediate')) {
		function startGame() {

		chosenWord = intermediateList[Math.floor(Math.random() * intermediateList.length)];

		lettersInWord = chosenWord.split("");

		numBlanks = lettersInWord.length;

		console.log(chosenWord);

		};
		startGame();

		$("#intermediate").keyup(function(event) {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);
		});
	}
});
// *******************************************************
// HARD MODE
// *******************************************************
$( function() {
	if ($('body').is('#hard')) {
		function startGame() {

		chosenWord = hardList[Math.floor(Math.random() * hardList.length)];

		lettersInWord = chosenWord.split("");

		numBlanks = lettersInWord.length;

		console.log(chosenWord);

		};

		startGame();

		$("#hard").keyup(function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
		});
	}
});
// *******************************************************
// 
// *******************************************************









