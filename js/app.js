// *****************************************************************************

// Weekend Homework (w01d05):

// *****************************************************************************

	// Long_Weekend covering loops, functions, and datatypes

//------------------------------------------------------------------------------
//  Conceptual Questions:
//------------------------------------------------------------------------------

// ----------
// STRINGS:
// ----------
	// 1. Create a variable called firstVariable.
	// assign it the value of a string => "Hello World"
	// change the value of this variable to a number.
	// store the value of firstVariable into a new variable called secondVariable
	// change the value of secondVariable to a string.

		// let firstVariable = "Hello World";

		// firstVariable = 10;

		// let secondVariable = firstVariable;
		// secondVariable = "Ten";

		// console.log(firstVariable) // The value of firstVariable = 10;

	// 2. Create a variable called yourName and set it equal to your name as a string.
	// 	Write an expression that takes the string "Hello, my name is " and the variable 
	// 	yourName so that it returns a new string with them concatenated.
	
		// let yourName = "Alex";
		// console.log("Hello, my name is " + yourName);

// ----------
// BOOLEANS:
// ----------
	// 1. Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
		 
	//  const a = 4;
	//  const b = 53;
	//  const c = 57;
	//  const d = 16;
	//  const e = 'Kevin';

		// console.log(a < b);
		// console.log(c > d);
		// console.log('Name' == 'Name');
		// console.log(a < b < c);
		// console.log(a + a < d);
		// console.log(e == 'Kevin');
		// console.log(48 == '48');

// ----------
// THE FARM:
// ----------
	// 1. Write code that will print out "mooooo" if the variable animal is equal to cow.

		// let animal = "cow";
		// if (animal === "cow") {
		// 	console.log("mooooo")
		// }
		// console.log(animal);

	// 2. Change your code so that if the variable animal is anything other than a cow, 
	// your should print out "Hey! You're not a cow."

		// let animal = "pig";

		// if (animal === "cow") {
		// 	console.log("mooooo")
		// } else {
		// 	console.log("Hey! You're not a cow!");
		// };

// ------------
// Driver's Ed:
// ------------
	// 1. Write a variable that will hold a person's age.
		// let age = 14;
	// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
			
		// let age = 14;

		// if (age >= 16) {
		// 	console.log("Here are the keys");
		// };

// 3. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
		// let age = 14;

		// if (age >= 16) {
		// 	console.log("Here are the keys");
		// }
		// else {
		// 	console.log("Sorry, you're too young");
		// };

// -------------
// Just Loop It:
// -------------

	// 1. Write code that will print out all the numbers in the range 0 - 10.

		// for (let i = 0; i <= 10; i++) {
		// 	console.log(i);
		// }

	// 2. Write code that will print out all the numbers in the range 10 - 4000.

		// for (let i = 10; i <= 4000; i++) {
		// 	console.log(i);
		// }

	// 3. Write code that will print out every other number in the range 10 - 4000.

		// for (let i = 10; i <= 4000; i+=2) {
		// 	console.log(i);
		// }

// --------------
// Give Me Five:
// --------------

	// 1. For the numbers 0 - 100, print out "I found a number. High five!" 
	// If the number is a multiple of five.
	// Example Output:
	// I found a 5. High five!
	// I found a 10. High five!

		// for (let i = 0; i <= 100; i++) {
		// 	if (i % 5 === 0) {
		// 		console.log(`I found a ${[i]}. High five!`);
		// 	}
		// }

	// 2. Add to the code from above to print out "I found a number. 
	// Three is a crowd" if the number is a multiple of three.
	// Example Output:
	// I found a 3. Three is a crowd
	// I found a 5. High five!
	// I found a 6. Three is a crowd
	// I found a 9. Three is a crowd
	// I found a 10. High five!

		// for (let i = 3; i <= 100; i++) {
		// 	if (i % 5 === 0) {
		// 		console.log(`I found a ${[i]}. High five!`);
		// 	} else if 
		// 		(i % 3 === 0)
		// 		console.log(`I found a ${[i]}. Three is a crowd`);
		// 	}
	
// -----------------
// Savings Account:
// -----------------

	// 1. Write code that will save the sum of all the numbers between 1 - 10 
	// to a variable called bank_account.
	// 2. Check your work! Your banck_account should have $55 in it.

		// const bank_account = (sumMoney) => {
		// let sumFunds = 0;
		// for (let i = 1; i <= sumMoney; i++) {
		// 	sumFunds += i;
		// 	}
		// return sumFunds;
		// }
		// console.log(bank_account(100));

	// 2. You got a bonus! Your pay is now doubled each week. 
	// Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
		
		// const bank_account = (sumMoney) => {
		// 	let sumFunds = 0;
		// 	for (let i = 1; i <= sumMoney; i++) {
		// 		sumFunds += i * 2;
		// 	}
		// 	return sumFunds;
		// }
		// console.log(bank_account(100));

// ----------------------
// Multiples of 3 and 5:
// ----------------------
	// 1. If we list all the natural numbers below 10 that are multiples of 3 or 5:
	// we get 3, 5, 6 and 9. 
	// The sum of these multiples is 23.
	// Find the sum of all the multiples of 3 or 5 below 1000.

		// const finalSum = (findMultiples) => {
		// 	let sumMultiples = 0;
		// 	for (let i = 1; i <= 1000; i++) {
		// 		if (i % 3 === 0 || i % 5 === 0)
		// 			sumMultiples += i;
		// 			console.log(i);
		// 		}
		// 		return sumMultiples;
		// 	}
		// 	console.log(finalSum(1000));
		
	// 👏 You just solved Project Euler problem 1! 👏

// ----------------------
// Easy Does It:
// ----------------------
	// 1. Create an array that contains three quotes and store it in a variable called quotes.
/*		const quotes = ["Yes, you can\'t.", "Escapist, just like me.", "I like the hole and the pole."];
		console.log(quotes);*/
		// - Jerri Blank, Strangers with Candy.

// ----------------------
// Multiples of 3 and 5:
// ----------------------
	// 2. Given the following array:

		// const randomThings = [1, 10, "Hello", true]

	// how do you access the 1st element in the array?

		// console.log(randomThings[0]);

	// Change the value of "Hello" to "World".

		// randomThings[2] = "World";

	// Check the value of the array to make sure it updated the array.

		// console.log(randomThings);

// ----------------------
// We've Got Class:
// ----------------------

	// 1. Given the following array:

		// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

	// 2. What would you write to access the 3rd element of the array?

		// console.log(ourClass[2]);

	// 3. Change the value of "Github" to "Octocat"

		// ourClass[2] = "Octocat";
		// console.log(ourClass);

	// 4.  Add a new element, "Cloud City" to the array.

		// ourClass.push("Cloud City");
		// console.log(ourClass);

// ----------------------
// Mix It Up:
// ----------------------

	// 1. Given the following array:

		// const myArray = [5 ,10 ,500, 20]

	// using the push method, add the string "Egon" to the end of the array.

		// myArray.push("Egon");
		// console.log(myArray);

	// using a method, remove the string from the end of the array.

		// myArray.pop("Egon");
		// console.log(myArray);

	// using the unshift method, add the string "Bob Marley" to the beginning of the array

		// myArray.unshift("Bob Marley");
		// console.log(myArray);

	// using a different method, remove the string from the beginning of the array

		// myArray.shift([0]);
		// console.log(myArray);

	// use the reverse method on this array

		// myArray.reverse();
		// console.log(myArray);

// ----------------------
// Biggie Smalls:
// ----------------------

	// 1. Write an if..else statement:
	// 2. console.log little number if the number is entered is less than 100
	// 3. If the number entered is 100 or more, alert big number.

		// let i = 200;
		// 	if (i < 100) {
		// 		console.log("little number");
		// 	} else
		// 		console.log("big number");

// ----------------------
// Monkey In The Midlle:
// ----------------------

	// Write an if...else if...else statement:
	// console.log little number if the number entered is less than 5.
	// If the number entered is more than 10, log big number.
	// Otherwise, console.log "monkey". 

		// let middleMonkey = 6;

		// 	if (middleMonkey < 5) {
		// 		console.log("little number");
		// 	} else if (middleMonkey > 10) {
		// 			console.log("big number");
		// 	} else {
		// 			console.log("monkey");
		// 	};
			
// ----------------------
// What's In Your Closet?:
// ----------------------

	// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript:
		
		// const kristynsCloset = [
		//   "left shoe",
		//   "cowboy boots",
		//   "right sock",
		//   "GA hoodie",
		//   "green pants",
		//   "yellow knit hat",
		//   "marshmallow peeps"
		// ];

// Thom's closet is more complicated. Check out this nested data structure!!
		
		// const thomsCloset = [
		//   [
		//     // These are Thom's shirts
		//     "grey button-up",
		//     "dark grey button-up",
		//     "light blue button-up",
		//     "blue button-up",
		//   ],[
		//     // These are Thom's pants
		//     "grey jeans",
		//     "jeans",
		//     "PJs"
		//   ],[
		//     // Thom's accessories
		//     "wool mittens",
		//     "wool scarf",
		//     "raybans"
		//   ]
		// ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the 
// sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

		// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

		// kristynsCloset.shift([0]);
		// let kristynShoe = "left shoe";
		// console.log(kristynShoe);
		// console.log(kristynsCloset);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

		// kristynsCloset.splice(5, 0, "raybans");
		// console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
		
		// kristynsCloset[4] = "stained knit hat";
		// console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

		// console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
		
		// console.log(thomsCloset[1][1]);

// Access one item from Thom's accessories array.

		// console.log(thomsCloset[2][2]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

		// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

		// thomsCloset[1][2] = "Footie Pajamas";
		// console.log(thomsCloset);

// ----------
// Functions:
// ----------

	// printGreeting
	// Write a function called printGreeting with a parameter name that returns a greeting with the argument 
	// interpolated into the greeting.

	// const printGreeting = (name) => {
	// 	return (`Hello there, ${name}!`);
	// };
	// console.log(printGreeting("Slimer"));

// ------------------
// reverseWord Order:
// ------------------

	// Write a function reverseWordOrder that accepts a single argument, a string. 
	// The function should return a string with the order of the words reversed. 
	// Don't worry about punctuation.

	// e.g.:
	// console.log(reverseWordOrder("Ishmael me Call"));
	// => "Call me Ishmael"

	// console.log(reverseWordOrder("I use Lâncome on my comb"));

		// const reverseWordOrder = (string) => {
		// 	let words = 0;
		// 	words = string.split(" ").reverse().join(" ");
		// 		return words;
		// }
		// console.log(reverseWordOrder("Ishmael. Me Call"));

// ------------------
// Calculate:
// ------------------

	// Write a function called calculate.
	// This function should take three arguments, two numbers and a string.
	// Name the parameters num1, num2, and operation.
	// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
	// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
	// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

		// const calculate = (num1, num2, operation) => {
		// 	if (operation === "add") {
		// 		return num1 + num2;
		// 	} else if (operation === "sub") {
		// 		return num1 - num2;
		// 	} else if (operation === "div") {
		// 		return num1 / num2;
		// 	} else (operation === "exp") 
		// 		return Math.pow(num1, num2);
		// 	}
		// console.log(calculate(3, 4, "add"));
		// console.log(calculate(7, 6, "sub"));
		// console.log(calculate(10, 5, "div"));
		// console.log(calculate(10, 2, "exp"));

// ------------------
// Function #1:
// ------------------

	// Write a function printCool that accepts one parameter, name as an argument. 
	// The function should print the name and a message saying that that person is cool.

		// const printCool = (name) => {
		// 	nameIs = `${name} is cool`;
		// 	return nameIs;
		// }
		// 	console.log(printCool("Coolio"));

// ------------------
// Function #2:
// ------------------

	// Write a function calculateCube that takes a single number and prints the volume of a cube 
	// made from that number.

		// const calculateCube = (number) => {
		// 	volume = number * number * number;
		// 	return `Volume = ${volume}`;
		// }
		// 	console.log(calculateCube(10));

// ------------------
// Function #3:
// ------------------

	// Write a function isAVowel that takes a character (i.e. a string of length 1) 
	// and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

		// const isAVowel = (vowel) => {
			
		// 	if (vowel.length > 1) return false;

		// 	vowelCheck = ["a", "e", "i", "o", "u", "y"];
		// 	vowel = vowel.toLowerCase();

		// 		for (let i = 0; i < vowelCheck.length; i++) {
		// 			if (vowelCheck[i] === vowel) {
		// 				return true;
		// 				}
		// 			}
		// 		return false;
		// 	}		
		// console.log(isAVowel("E"));
		// console.log(isAVowel("p"));

// ------------------
// Function #4:
// ------------------

	// Write a function getTwoLengths that accepts two parameters (strings). 
	// The function should return an array of numbers where each number is the length of the corresponding string.

		// const getTwoLengths = (string1, string2) => {
		// 	let length1 = 0;
		// 	let length2 = 0;
			// 	for (let i = 0; i < string1.length; i++) {
			// 		length1 += 1;
			// 	}
			// 	for (let i = 0; i < string2.length; i++) {
			// 		length2 += 1;
			// 	}
			// 	return [length1, length2];
		// }
		// 	console.log(getTwoLengths("Alex", "Stratos"));


		// OR vvvvvv

		// const getTwoLengths = (string1, string2) => {
		// 	return [string1.length, string2.length];
		// }
		// console.log(getTwoLengths("Alex", "Stratos"));

// ------------------
// Function #5:
// ------------------

	// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
	// The function should return an array of numbers where each number is the length of the corresponding string.

	// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
	// => [5, 4, 2, 2, 4]

		// const getMultipleLengths = (array) => {
		// 	let index = 0;
		// 	let arrayLength = [];
		// 		for (let i = 0; i < array.length; i++) {
		// 			index = array[i].length;
		// 			arrayLength[i] = index;
		// 		}
		// 		return arrayLength;
		// }
		// 	console.log(getMultipleLengths(["Alex", "Stratos", "Midori", "Yanny"]));

// ------------------
// Function #6:
// ------------------

	// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
	// If all numbers are the same, it doesn't matter which one is returned. 
	// If the two largest numbers are the same, one of them should be returned.
	// e.g.:
	// console.log(maxOfThree(6, 9, 1));
	// => 9

		// const maxOfThree = (num1, num2, num3) => {
		// 	maxNum = 0;
		// 	let arr = [];
		// 	arr.push(num1, num2, num3);
		// 		for(let i = 0; i < arr.length; i++) {
		// 			if (arr[i] > maxNum) {
		// 				maxNum = arr[i];
		// 			}
		// 	} return maxNum;
		// }
		// console.log(maxOfThree(10, 50, 25));

// ------------------
// Function #7:
// ------------------

	// Write a function printLongestWord that accepts a single argument, an array of strings. 
	// The method should return the longest word in the array. 
	// In case of a tie, the method should return the word that appears first in the array.
	// e.g.:
	// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
	// => "Peanutbutter"

		// const printLongestWord = (arrayOfStrings) => {
		// 	let wordLength = 0;
		// 	let longestWord = [];
		// 		for (let i = 0; i < arrayOfStrings.length; i++) {
		// 			if (arrayOfStrings[i].length > wordLength) {
		// 			wordLength = arrayOfStrings[i].length;
		// 			longestWord = arrayOfStrings[i];
		// 		}
		// 	}
		// 		return longestWord;
		// }
		// 	console.log(printLongestWord(["Alex", "Stratos", "Midori", "Yanny", "Panayiota"]));

// ------------------
// Function #8:
// ------------------			

	// Write a Javascript function called transmogrify. 
	// This function should accept three arguments, which you can assume will be numbers. 
	// Your function should return the "transmogrified" result.
	// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
	// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
	// console.log(transmogrify(5, 3, 2));
	// => 225

		// const transmogrify = (num1, num2, num3) => {
		// 	transmogrified = 0;
		// 	for (let i = 0; i < 3; i++) {
		// 		transmogrified = Math.pow((num1 * num2), num3);
		// 	}
		// 	return transmogrified;
		// }
		// console.log(transmogrify(3, 4, 5));

// ------------------
// OBJECTS - Syntax:
// ------------------	

	// List and describe each individual piece of syntax that we use to construct an object. 
	// Don't leave anything out! The list is finite.
	// Example:
	// {} curly braces define the object.

		// 1. {} define the object
		// 2. Each object is made up of key/value pairs, that are separated by a ":".
		// 3. Each key/value pair must be separated by a ",".
		// 4. Keys are descriptive identifiers, always written in camelCase
		// 5. Values can be any valid expressions (including functions).
		// 6. Object Constructors are useful if we need multiple instances of our objects.
		// 7. Objects are not guranteed to stay in order.

// --------
// ME:
// --------
	
	// Create an empty object called me.
	// Assign it properties for name, age, and email with corresponding values.
	// The object would look something like this if we console logged it:

	// console.log(me);
	// => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}

			// const me = {
			// name: "Alex",
			// age: 32,
			// email: "alexandrejdohrmann@gmail.com",
			// }
			// console.log(me);

	// Using dot notation, access the name property in your object.		
			
			// const me = {
			// name: "Alex",
			// age: 32,
			// email: "alexandrejdohrmann@gmail.com",
			// }
			// console.log(me.name);

	// Without writing directly into the object, update the value of age to be 1000 years old.

			// const me = {
			// name: "Alex",
			// age: 32,
			// email: "alexandrejdohrmann@gmail.com",
			// }
			// me.age = 1000;
			// console.log(me.age);

	// Using dot notation, verify that age has been updated.

			// console.log(me.age);

	// Add a key to this object called: "place of residence" and give it a value of your hometown. 
	// Note that the key has spaces, therefore you cannot use dot notation.

			// const me = {
			// name: "Alex",
			// age: 32,
			// email: "alexandrejdohrmann@gmail.com",
			// }
			// me.age = 1000;
			// me["place of residence"] = "Littleton",
			// console.log(me["place of residence"]);
			// console.log(me);

	// Access the value of "place of residence"

			// console.log(me["place of residence"]);


// ------------------
// Slimer:
// ------------------
	
			// const monster = {
			//    name: "Slimer",
			//    color: "greenish",
			//    type: "plasm or ghost or something"
			// }

	// Given the slimer object:
	// What would you write to access the name and console.log it?

			// console.log(monster.name);

	// What would you write to change the type to 'creature' (without changing it inside the object)

			// monster.type = "creature";
			// console.log(monster);

	// What would you write to add a key to the object called age, and set the age to 6?

			// monster.age = 6;

	// console.log the object to make sure type is creature, and age is 6

			// console.log(monster);


// ------------------
// Ogres:
// ------------------

	// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
	// Using objects, create models and have them interact.
	// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

		// const adventurer = {
		// 	name: "Starlord",
		// 	age: 30,
		// 	hitpoints: 50,
		// 	starlordAttack () {
		// 		ogre.hitpoints -= 10;
		// 	},
		// }

	// // how would you model an ogre? Your ogre will want hitpoints.

		// const ogre = {
		// 	name: "Ogre",
		// 	age: 300,
		// 	hitpoints: 50,
		// 	ogreAttack () {
		// 		adventurer.hitpoints -= 5;
		// 	},
		// }

	// Write a very small program that will simulate a battle between your adventurer and an ogre.
	// When your adventurer's hitpoints reach 0 the game is over.
	// When your ogre's hitpoints reach 0 the game is over.
	// If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).

		// while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
		//   let attack = Math.floor(Math.random() * 50) + 1 
		//   if (attack < 25) {
		//     console.log("Oh no! The Ogre smashed you with its' mace!");
		//     ogre.ogreAttack();
		//     if (adventurer.hitpoints > 0) {
		//       console.log(`You have ${adventurer.hitpoints} life left`);
		//     } else {
		//       console.log("GAME OVER. The Ogre has killed you");
		//     }
		//   } else {
		//     console.log("You scorched the Ogre with your plasma cannons!");
		//     adventurer.starlordAttack();
		//     if (ogre.hitpoints > 0) {
		//       console.log(`Great job! The Ogre only has ${ogre.hitpoints} life left!`);
		//     } else {
		//         console.log("Congratulations, you slayed the Ogre!");
		//     }
		//   }
		// }






