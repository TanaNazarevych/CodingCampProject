let animals = ["dog", "cat", "raccon", "frog"];
animals[0]; //dog

console.log(animals[2]); //fish

animals[1] = "parrot";
console.log(animals[2]); //parrot

animals.push("bunny"); //adds animal to the end of the array

animals.pop()  //removes animal to the end of the array

animals.unshift()// adds animal to the front of the array

animals.shift()// romoves animal to the front of the array

animals.splice() // remove of replase items in array

//indexOf - to find and return the index of the item in the array

let index = animals.indexOf("raccon");
console.log("Raccon is at index:", index);

//length() - to get the size of the array

console.log("The length of animals array is: ", animals.length);

let emptyArray = [];

let mixedArray = ["bird", 19, 23.67];




let colors = ["red", "blue", "green"];
console.log(colors)

colors.push("black");
console.log(colors);

colors.splice(colors.indexOf("blue"), 1);
console.log(colors);

colors.splice(0, 2, "green", "red");
console.log(colors);





