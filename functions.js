/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Array and a String
O: Animal's object or null
C: n/a
E: n/a
*/
// Function takes parameters of array and string
// Push values of objects in the array onto storage array
// Use includes() method to see if string exists inside of the storage array
// Return that animal's object if yes
// Return null if not
// 
function search(array, string){
    var nameExists = [];
    for (var i = 0; i <= array.length - 1; i ++){
        if (array[i]['name'].includes(string)){
            nameExists.push(string);
            return array[i];
        } 
        }
        return null;
    }



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
I: Animals array, string of animal name, replacement animal object
O: Replace animal object on animals array with repalcement object if the 
animal name string exists on animals array
C: n/a
E: n/a
*/
// Use for loop to iterate over animals array
// Use .includes() to test if animals array includes argument name string
// Use splice method to replace animal object at i with replacment if name arguement is in animals array
// Return the updated animals array
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name.includes(name) === true){
            animals.splice(i, 1, replacement);
        }
    }
    return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Animals array and name to perform a search for
O: Remove animal object from animals array if animal name exists in animals array
C: n/a
E: n/a
*/
// Use for loop to iterate over animals array
// Use .includes() to test if animals.includes(name)
// If animals.incldues(name) === true --> remove the animal object at that index
// Use splice() method to remove that animal
// Return animals array
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name.includes(name) === true){
            animals.splice(i, 1);
        }
    }
    return animals;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Animals array and new animal object t0 be added
O: Return updated animals array
C: n/a
E: n/a
*/
// Create storage array 
// Use for loop to push names from animals array onto storage array
/** Use if conditional to test:
 * animal.name.length > 0
 * animal.species.length > 0
 * animalNames array includes() new animal.name !== true
 */
// Push animal object onto animals array if all tests pass
// Return animals array
function add(animals, animal){
    var animalNames = []
    for (var i = 0; i < animals.length; i++){
        animalNames.push(animals[i].name);
    }
    if (animal.name.length > 0 && animal.species.length > 0 && animalNames.includes(animal.name) !== true){
        animals.push(animal);
    }
   return animals;
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}