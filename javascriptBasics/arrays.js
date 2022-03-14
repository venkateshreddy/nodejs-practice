const namesArray = [
    "suresh",
    "Ramesh",
    "Rajesh",
    "Ajay",
    "Vijay"
];
console.log(`first element in the array is ${namesArray[0]}`)
console.log(`third element in the array is ${namesArray[2]}`)

//finding the last element of the array
const lastIndex = namesArray.length - 1;
console.log(`last element in the array is ${namesArray[lastIndex]}`)


//=====================Array with multiple types of data==============//
const multipleTypesArray = [
    1,
    "suresh",
    [1.2, 3.4, 5.6, 7.8],
    { firstName: "Vita", "lastname": "Technologies", "city": "Karimnagar", state: "telangana" }
];
console.log("============Multiple types array ================")
for(let i = 0; i < multipleTypesArray.length; i++ ) {
    console.log(`element ${i+1} in array is ${multipleTypesArray[i]}. And its type is ${typeof(multipleTypesArray[i])}`);
}

//searching for an element in the array
console.log(`position of suresh in the array is ${multipleTypesArray.indexOf('suresh')}`)

const isFound = multipleTypesArray.includes("SureshKumar");
if (isFound) {
    console.log(`SureshKumar found in the array`)
} else {
    console.log(`SureshKumar not found in the array`)
}

const numericalArray = [ 1, 2, 3, 4, 5, 6];

//traverse thru the array and do some thing with them
numericalArray.forEach(function(element) {
    console.log(`${element} squre is ${element * element}`);
})

//get another array out ot the existing array with some calculated values
const squresArray = numericalArray.map(function(element) {
    return element * element;
})
console.log(squresArray, 'squresArray')

//filter out all even numbers from the array 
const evenNumbersArray = numericalArray.filter(function(element) {
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
})
console.log(evenNumbersArray,'evenNumbersArray');

//filter out all odd numbers from the array 
const oddNumbersArray = numericalArray.filter(function(element) {
    if (element % 2 === 0) {
        return false;
    } else {
        return true;
    }
})

console.log(oddNumbersArray,'oddNumbersArray');




