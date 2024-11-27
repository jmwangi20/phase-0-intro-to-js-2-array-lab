// Write your solution here!

const cats = ["Milo", "Otis" ,"Garfield"];

// Adds an element at the end of the array
function destructivelyAppendCat(name){
    return cats.push(name);
}
// Adds an element at the beginning of an array

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
// Removes an element at the end of an array
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
// removes the first element of an array
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
// Adds a cat name at the end of the array
function appendCat(name){
    return [...cats, `${name}`]
}

// Adds a cat name at the beggining of the array
function prependCat(name){
    return [`${name}`,...cats]
}

// Remove the last cat from the array
function removeLastCat(name){
    return cats.slice(0,cats.length-1);
}

// removes the first cat from the array

function removeFirstCat(name){
    return cats.slice(1,);
}
