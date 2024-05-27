/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // Declare empty object
animal.species = 'Dog'; // Initialize key species to the object
animal['name'] = 'Bruce'; // Initialize key of name to the object
animal.noises = []; // Initialize key of noises to the object
console.log(animal); // Log animal object to the console


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // Initialzing noises to an empty array
noises[0] = 'whoof'; // Give index 0 of noises a value
noises.push('whine'); // Push element onto the end of noises array
noises.unshift('cry'); // Add an element to the beginning of the nises array
noises[noises.length] = 'whimper'; // Add element to the end of noises array
console.log(noises.length); // Print length of noises
console.log(noises.length - 1); // Print last index of noises to the console
console.log(noises); // Print noises array




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; // Noises key is equal to noises array
noises.push('growl'); // Adding new element to end of noises array
console.log(animal); // Log animal


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // Declaring variable to an empty array
animals.push(animal); // Push animal object onto animals array
console.log(animals); // Print animals array to console
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck); // Push duck object onto animal array
console.log(animals); // Print animals array
var monkey = {
  species: 'monkey',
  name: 'George',
  noises: ['hoohoo', 'ahh ahh']
};
var crow = {
  species: 'crow',
  name: 'Phil',
  noises: ['caww', 'tap']
};
animals.push(monkey, crow);
console.log(animals); // Print animals array
console.log(animals.length); // Print length


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Using an array data structure because arrays have order and the elements can
be accessed using index
*/
var friends = []; // Assigning friends to an empty array
// Create function that taked parameter i
// Use for loop to iterate over animals array
function getRandom(array){
for (var i = 0; i < array.length; i ++){
  return Math.random(array[i]); // Return random index of animals
};
}
// Access element from animals using getRandom function
// Push the random element onto friends array
friends.push(getRandom(animals));

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}