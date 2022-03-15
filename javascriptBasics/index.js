let maxNumber = 100;
for (let i = 1; i <= maxNumber; i++)  {
    if (isEven(i)) {
        printLine(`${i} is even number`)
    } else {
        printLine(`${i} is odd number`)
    }
}

const anotherMaxNumber = 200;
for (let i = 101; i <= anotherMaxNumber; i++)  {
    if (isEven(i)) {
        printLine(`${i} is even number`)
    } else {
        printLine(`${i} is odd number`)
    }
}



function printLine(message) {
    console.log(`LOG :: ${message}`);
}

function isEven(num) {
    if (num % 2 == 0) {
        //this is even number
        return true;
    } else {
        //this is odd number
        return false;
    }
}