// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.

// Programmer Vanessa


// 1.
// Should always return the value 5

function giveMeFive() {
	console.log(5 + " Excercise #1");
}
giveMeFive();

//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)
//var oneParm = "oneParmValue";
function noOp(oneParm) {
	console.log(oneParm + " Excercise#2");
}
noOp("hola");
//THIS I AN EMPTY FUNCTION

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double(numberToDouble) {
	var doubledNumber = numberToDouble * 2;
	console.log(doubledNumber + " Excercise #3");
}
double(5);

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square(numberOne) {
	var numberOne = numberOne * numberOne;
	console.log(numberOne + " Excercise #4");
}
	square(7);

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.

function sum() {
	var sum = 0;
	var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	for (i=0;i<array.length;i++){
		sum += array[i];
	}
	console.log(sum + " Excercise#5")

}
	sum();

//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop
var lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	function letterIndex(InputLetter, Indice){
	var checkedLetter = InputLetter.toLowerCase();
	var LetterIndexValue = lettersArray.indexOf(checkedLetter);
	var Indice = LetterIndexValue +=1;
	return Indice;
	console.log(Indice);	
}


letterIndex("B");
//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator

 function reverseLetterIndex(InputNumber, Letter){
 	NewIndex = InputNumber -1;
 	if (InputNumber >= 27) {
 		newIndice = InputNumber % 13;
 		newIndice -= 1;
 	}
 	if (InputNumber < 27)  {
 		var Letter =lettersArray[NewIndex];
 	}
 	else {
 	var Letter = lettersArray[newIndice];
 	}
 	return Letter;
 	console.log(Letter); 
	 	}

reverseLetterIndex(28);

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions

function rot13(str) {
	var indexarray = [];
	newstrarray = str.split("");
	console.log(newstrarray);
	for (i=0; i < newstrarray.length;i++){
		var Indice = letterIndex(newstrarray[i], Indice);
		indexarray.push(Indice);
	}
	console.log(indexarray);
	var rot13array = [];
	for (b=0;b<indexarray.length;b++){	
		var index13 = indexarray[b] + 13;
		var Letter = reverseLetterIndex (index13, Letter);
		if (index13 == 13){
			var Letter = " ";
		}
		rot13array.push(Letter);
	}
	console.log(rot13array);
	var newString = rot13array.join("");
	console.log(newString);

}
rot13("Vanessa Torres");
