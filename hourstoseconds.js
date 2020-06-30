// Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
//Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

function howManySeconds(hours) {
	var minutes = (hours * 60);
	var seconds = (minutes * 60);
	return(seconds);
};
howManySeconds();

//otras soluciones de la pagina
function howManySeconds(hours) {
	return hours * 3600;
}

// otra function
let howManySeconds = h => h * 3600;

// otras
let howManySeconds = h => h * 3600;

// function a + b // edabit// funciona!!!!//
function addition (a, b){
var c = (a + b);
  return c;
};
addition(3, 4);
