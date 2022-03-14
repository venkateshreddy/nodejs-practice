const companyName = "Vita technologies";
/**
 * 0 - V
 * 1 - i
 * 2 - t
 * .
 * .
 * 16 - s
 */
//to find the length of the string
console.log(`Length of the companyName is ${companyName.length}`);

//to find the substring out of the string (part of string)
const firstName = companyName.substring(0, 4);
const lastName = companyName.substring(5);
console.log(`First name of the company is ${firstName}. The last name of the company is ${lastName}`)

//to find reverse of the string
//console.log(companyName.reverse())


//split a string
const nameArray = companyName.split(" ");
console.log(`First name of the company is ${nameArray[0]}. The last name of the company is ${nameArray[1]}`)

//find a substring in a string
const stringToFind = "tech";
console.log(companyName.includes(stringToFind));

//find the position of a substring
console.log(`position of ${stringToFind} in ${companyName} is ${companyName.indexOf(stringToFind)}`);
const positionofSubstring = companyName.indexOf(stringToFind);
if (positionofSubstring >= 0) {
    console.log(`${stringToFind} is present in ${companyName}`);
} else {
    console.log(`${stringToFind} is not present in ${companyName}`);
}
