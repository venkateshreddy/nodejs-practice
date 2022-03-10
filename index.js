//  console.log("Start Form the NodeJS");

//  const  one =1;
//  console.log("The given value is","1");

//  const two=2;
//  console.log("The given value is","2");
 
//  const three=3;
//  console.log("The given value is",1+2);

//  console.log("The given value is",1*2*3*4);

//  const four=4;
//  console.log("sum of the given numbers",two+two);

// const five=5;
// console.log("sum of the given numbers",two+three);


// let maxNumber=1000;

// for(i=0;i<=100;i++){

// if(isEven(i)){
//     printline(`${i} is even number`);
// }else{
//     printline(`${i} is odd number`);
// }
// }

// const anthermaxNumber=3000;
// for(i=0;i<=anthermaxNumber;i++){

//     if( isEven(i)){
//         printline(`${i} is even number`);
//     }else{
//         printline(`${i} is odd number`);
//     }
//     }    

// function printline(message){

// console.log(`LOG::${message}`);
// }

// function isEven(number){
    
// if( number % 2==0){
//     return true;
// }else{
//     return false;
// }
// }


 let maxNumber=10;
  for(i=0;i<=maxNumber;i++){
      if(isEven(i)){
          console.log(`${i} this is a even number`)
      }
  else{
console.log(`${i} this is a odd number`)
  }
  }

  const anthermaxNumber=200;
  for(i=0;i<=anthermaxNumber;i++){
      if(isEven(i)){
        printline(`${i} this is a even number`)
      }
  else{
    printline(`${i} this is a odd number`)
  }
}

function isEven(number){
    if(number % 2==0){
        printline(`${i} this is a even number`)
    }
else{
printline(`${i} this is a odd number`)
}
}
 function printline(message){
     console.log(`LOG::${message}`)
 }