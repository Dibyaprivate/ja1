// let num =1;
// while (num <=10) {
//     if (num %2 != 0) {
//        num += 1; 
//        continue;
//     }
//     console.log(num);
//    num += 1;
// }
// let variable details:-
//Variables declared inside a { } block cannot be accessed from outside the block:
{
   let x =56;
}
//console.log(x); if i do get some error ReferenceError: x is not defined
//global scope
//Variables declared with var inside a { } block can be accessed from outside the block:
// 1Variables declared with the var always have Global Scope.
//
// {
//    var name ="banty";
// }
//console.log(name);
//var x = 2;   // Allowed
//let x = 3;   // Not allowed
var num = 8;

const wantToKnowThis = function(val) {
  var num = 6;
  return this.num;
}

console.log(wantToKnowThis(3)); // Should print 8 if not in strict mode

let car = {type:"Fiat", model:"500", color:"white"};


 car ={type:"circle", model:"450",color:"brown"};
console.log(car);
/* 
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Divisionlet
%	Modulus (Division Remainder)
++	Increment
--	Decrement 
*/
let a= 23; b=34;
// x = a + b;
//    y = a-b;
//    z= a*b;
console.log(a);

   //let z = a ** 2;
  // console.log(z);
  //   x = 5;
  //  let y = 2;
  //  let c = x % y; 
  //  console.log(c);
   let x = 5;
let z = Math.pow(x,2);
let c = x ** 2;
console.log(z,c);

let y = Math.pow(4, 3); // 4*4=16*4=64;
console.log(y);
console.log(Math.pow(7, 3));// 7*7=49*7=343;
let string ="16" +"dibya";//when you try to adding a number and string the output become a string
console.log(string);
/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/
let answer1 = "It's alright";
console.log(answer1);
let w = BigInt("123456789012345678901234567890");
console.log(w);
let cars = ["Saab", "Volvo", "BMW"];
cars={name:"char",addresh: "we",number:"3444444"};

console.log(cars[0]);

function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(23,23));//529
// Initializing while declaring
    // Creates an array having elements 10, 20, 30, 40, 50
    var house = new Array(10, 20, 30, 40, 50);
    
    // Creates an array of 5 undefined elements
    var house1 = new Array(5);
    
    // Creates an array with element 1BHK
    var home = new Array("1BHK");
    console.log(house)
    console.log(house1)
    console.log(home)

    // Function that check str is palindrome or not 
// var Str = "banty";
// var isPallindrome = true;
// var len =String.length;
// for(var i=0; i < len/2; i++){
//   if(String[i]!== String[len - 1 - i]){
//    isPallindrome=false;
//    break;
//   }
// }
// if(isPallindrome){
//   console.log("yes it is");
  
// }
// else{
//   console.log("no ");
  
// }

// var String = "sus";
// var isPallindrome = true;
// var len=String.length;
// for (var i = 0; i < len/2 ; i++) {
//  //console.log(String[i]);
//  //console.log(String[len -1 - i]);
//   if(String[i] !== String[len - 1 - i]){
//      isPallindrome=false;
//      break;
//      //  console.log("ନାହିଁ, ଏହା ପାଲିଣ୍ଡ୍ରୋମ୍ ନୁହେଁ।" );
//  }
 
// }
// //console.log("ହଁ, ଏହା ଏକ ପାଲିଣ୍ଡ୍ରୋମ୍।");
// if (isPallindrome) {
// console.log("is pallindrome");
// }  
// else {
// console.log("no its not");
// }
var String="nayan";
var len =String.length;
var isPallindrome = true;
for (let i = 0; i < len/2; i++) {
  
   
   if(String[i]!== String[len - 1 - i]){
      isPallindrome = false;
       break;
   }
   
}
if (isPallindrome) {
   console.log("is a pallindrome");
} else {
   console.log("not a pallindrome");
   
}
let u = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
console.log(myFunction(a,b));
 



