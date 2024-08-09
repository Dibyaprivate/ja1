let a =4;
let b =3;
let x=myFunction();
function myFunction( a ,b) {
    return a * b;
}
console.log(myFunction(a,b));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  console.log(toCelsius(77));
  //console.log(value);

  function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }
  function tofahrenheit(Celsius) {
    //formula is fahrenheit =(celsius * 9/5)+32 
    //Fahrenheit=(Celsius × 9/5)+32
    return (Celsius *9/5)+32;
  }
  let banty =tofahrenheit;
  console.log(banty(43));
  
  function getEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6,34,45,23,12];
console.log(getEvenNumbers(array));
 

//console.log(evenNumbers); // Output: [2, 4, 6]
function myEvennumber(number){
//let String =String.length;
let numbers =[];
for(let i=0; i < number.length; i++){
if (number[i]%2===0) {
  numbers.push(number[i])
  
}
}
return numbers;
}
const arra =[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(myEvennumber(arra));
//farenheit to celsius
//formula (9/5) * farenheit -32;
function celsiusto(farenh) {
  
  return (5/9) * (farenh - 32);
  
}
let valu =celsiusto;
console.log(valu(777));

//413.89°C.
function namee(celsiu) {
  return (celsiu *9/5)-32;

}
let become = namee;
console.log(become(413.89));
console.log(isNaN('vinod'));
console.log("5"+23);
//console.log(''+0);
let sum = " "+0;
console.log(typeof sum);
console.log('vinod'-'thapa');
console.log(true + true);
console.log(false + false);
console.log(false == true);
console.log(false + true);
console.log(false - true);
console.log(true === true);

// expresions operator
//Assignment operator is nothing but it's symbols  used to assigned values to variables,They take the value on the side 
//of the operator and  assign in to the variable on the left side.
var result = 0.1 +0.2;
console.log(result.toFixed(1));
let num1 = '5';
let num = 5;
if (num1 == num ) {
  console.log('equal');
  
} else {
  console.log('not equal');
  
}
if (num1 === num) {
  console.log('equal');
  
} else {
  console.log('not eqal');
  
}
let open = false;
console.log(!open);
/* 
ternary operator syntax in javascript 
condition ? expressioniftrue: expresioniffalse; 
*/
let age = 19;
let resul = (age >= 18)?'he/shecanvote':'he/shecantvote';
console.log(resul);
console.log('5'-3);
console.log( 2 < 12 < 5);
/*
 In JavaScript, the expression `2 < 12 < 5` is evaluated in two steps due to how the language handles comparisons:

1. First, `2 < 12` is evaluated. This results in `true`, since 2 is indeed less than 12.
2. Then, the result (`true`) is compared to 5. In JavaScript, `true` is treated as the number `1` when used in numeric comparisons. So the comparison becomes `1 < 5`.

Since `1` is indeed less than `5`, the final result of the expression `2 < 12 < 5` is `true`.

So, the output of `console.log(2 < 12 < 5);` is `true`.
*/
const q =0.1 + 0.2;
console.log(q . toFixed(1));
const day =1;
console.log(typeof day);
switch (day) {
  case 1:console.log("work day");
   break;
 case 2:console.log("enjoy ur life");
 break;
 case 3:console.log("its party time bro");
 
  default: console.log("your input is incorrect bro plz check it");
  
    break;
}








