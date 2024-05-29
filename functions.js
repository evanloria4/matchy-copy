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
// Create storage array that contains names within the objects of the animals array
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



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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