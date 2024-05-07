# js
new javascript tutorial
<!-- note-1: Prefer not to use "var" because of issue in block scope and fuctional scope   -->

<!-- node-2: "use strict"; to use treat all js code as newer version -->

DATA TYPE:
<!-- number => 2 to power 53
bigint
string => "kaushal"
boolean => true/ false
null => empty value // type of null is object
undefined => value id not defined 
symbol => unique -->

Datatype conversion 
<!-- convert string in number "33abc" then type of this conversion is number but the value is NaN = not a number -->

<!-- in th boolewan value conversion 0 -> false and 1 -> true -->

Operations
<!-- console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "3"); //33  -->

DataTypes:
<!-- 1.primitivedata type
number => type of number is number
string => type of string is string
null => type of null is object
undefined => type of undefined is undefined 
boolean => type of boolean is boolean
symbol => type of symbol is symbol 
bigInt => type of BigInt is bigInt  -->

<!-- 2.nonprimitivedata type 
array => type of array is array
object => type of object is object
function => type of function is function -->

String method:
<!-- (1)toUpperCase() => for consvert string into uppercase 
(2)toLowerCase() => for convert string into lowerCase
(3)substring(starting value, endvalue) => for make substring 
note:-- in this slice and substring method endvalue is exclusive and ()()(4)starting value is inclusive 
(5)slice(starting value, endvalue) => for make slice 
note:-- in the slice method negative value valid while in substring ()()(6)method negative value is not valid  
(7)charAt() => for find character at which value index 
(8)indexOf() => for find at given index which character exist
(9)trim() => it remove staring and ending extra spaces which is more than 1
(10)replace() => it replace the value in string
note:-- in this method starting value which value want to replace and ending value replace value need to discribe  
(11)split("value") => it split the string into array in the basis on the value  -->

templet literals (``) / string interpolation ${}
<!-- it is use where need to add string 
syntax is { this is a new string whith the length is ${new string}} -->

Math functions 
<!-- Math.abs() => to convert negaqtive value into positive 
Math.round() => to roundof value
Math.ceil() => to roundoff from upper value
Math.floor() => to roundoff from bottom value
Math.min() => to find minimum value
Math.random() => to print random value from 0 to 1 -->

Date function 
<!-- let myDate = new date()
console.log(mydate.toString()) to defined date 
getMonth() => to get month from the date function 
getDay() => to get day from the date function
now() => to get now time 
newdate.toLocalString('defult', {
    weekday: "long"
})
type of date is object -->

Arrays:
<!-- storing a collection of multiple items under a singloe variable name 
const Arr = [0, 1, 2, 3, 4, 5, 6] -->
Arrays method 
<!-- .push() => to add new variable at last in array
.pop() => it remove one variable from the last in the array
.unshift() => it add new variable from the start in the array
.shift() => it it remove one variable from the start in the array
.includes() => to defined that difined variable is present or not (it return true or false value )
.concat() => to merge to array with each other
.join() => adds all the elements of an array into a string
.slice() =>   Returns a copy of a section of an array
note:-- slice not change original array, and end value is exclusive 
.splice() => Removes elements from an array
note:-- splice chnage original array, and end value is inclusive  -->

Objects-literals:
<!-- object is access by console.log(objectname.key)
object is access by console.log(objectname[key])
symbol in object is denoted by in  [] ontherwise they acct as a string 
note:-- if you want to noone can change your object ypu can freeze the object by .freeze method -->

Object.assign() meyhod:
<!-- Object.assign() => this method is  static method copies all enumerable own properties from one or more source to a target object. it returns the modified target object 
example:--
 const target = { a: 1, b: 2}
 const source = { b: 4, c: 5}
 const returnedtarget = Object.assign(target, source)
 console.log(target)
 //Expected utput: Object {a: 1, b: 4, c: 5}
 console.log(returnedtarget === target)
 //Expected output: true -->
 <!-- Object.keys() => to acces the keys 
 Object.values() => to acces the values
 Object.entries() => to acces keys and values 
 objectname.hasOwnProperty("") => to check the value is present or not
 it return boolean value
  -->

Object de-structure and json API intro
Object de-structure:
<!-- example:
const course ={
    coursename: "ja tutorials",
    price: "999",
    courseInstructor: "kaushal"
}

const {sourseInstructore: Instructor} = course
const {keys value: new name} = objet name 

note: if you want to acces object keys or value multiple time you can use object de-structure by this method 
now you can access  courseInstructor by new name Instructor -->


json: ( JavaScript Object Notation )
<!-- example of json:
{
    "name" : "kaushal",
    "coursename" : "js tutorials",
    "Price" : "free"
} -->

<!-- API data store in the form of json fomat -->

function and parameter:
syntax: 
<!-- function functionname(parameters) {
    //...............
} 

functionname(arrguments)-->

rest operator
 <!-- (...) => this ... is called rest operator
 function calculatenumber(...num1){
    return num1
 }

 console.log(calculatenumber(200, 100, 300)); // [200, 100, 300] -->

example:--
<!-- const user = {
    username: "kaushal",
    Price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`)
}

handObject(user) // Username is kaushal and peice is 199 -->

exmaple:--
<!-- const mynewarray = [100, 200, 300]
function returnsecondarray(getarray){
    return getarray[1]
}

consolwe.log(returnsecondarray(mynewarray)); // 200 -->

Global and local scope 
 <!-- let and const is local/block scope variable  while var is a global scope variable  -->

 scope level and mini hoisting 
 nested scope:-- 
 <!-- function one(){
    function two() {
        function three() {

        }
    }
 } -->

 This and arrow function
<!-- this is a window object
The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects. -->
example:--
<!-- const test = {
    props: 43,
    func: function () {
        return this.props
    },
};
console.log(test.func())  // 43-->

Note:--
<!-- note:-- this function is not use in arrow function -->

Arrow function 
<!-- () => {} -->

Immediately Invoked Function Expressions (IIFE)
<!-- note:-- use of (iife) is to prevent global scope pollution  -->
<!-- ()() -->

javascript execution context
<!-- 1> global execution context
2> function execution context
3> eval execution context -->

<!-- Memory creation phase
execution phase -->

control flow:
condition statement:
<!-- if(condition) {
   // statement 
}else if ( condition){
    //statement 
}else {
    //statement 
} -->

comparisan operator:
<!--   <, >, <=, >=, ==, ===, !==, != -->

Logical operator:
<!-- 1> and operator: -- condition1 &&  condition2 (code execute when both condition true )
2> or operator : -- condition1 ||  condition2 (when two of one condition true condition satisfied )
3> not operator : --  !(condition1) (it convert true into false and vice-versa) -->

Switch case:
<!-- // switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } -->


truthy values and falsey values 
<!-- falsey values:-- 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values:--
[], "0", "false", " ", {}, function(){},  -->

Nullish coalescing Operator (??) : null, undefined
<!-- let val1; 
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 10 // 10 -->
 
terniary operator 
<!-- condition ? true statement  : false statement   -->

loops:--
iterations:--
for loop:--
<!-- for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} -->

break and continue

example:--
break:--
<!-- for (let index = 0; index <= 20; index++) {
    if(index == 5) {
        console.log(`number 5 is executed`)
        break
    }
    console.log(`value of index is ${index}`)
    
} -->

constinue:--
<!-- for (let index = 0; index <= 20; index++) {
    if(index == 5) {
        console.log(`number 5 is executed`)
        continue
    }
    console.log(`value of index is ${index}`)
    
} -->


while loop:--
<!-- let index = 0
while(index <= 10>) {
    //console.log(`value of indedx is ${index}`)
    index++
} -->

do while loop:--
<!-- let index = 5

do {
    console.log(`index value is ${index}`)
    index++
}
while(index <= 10);  -->

for of loop:--
<!-- const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i)
} -->

for in loop:--
<!-- for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} -->

Maps:--
<!-- the Map object holds key-value pairs and remembers the original insertion order of the keys. -->

<!-- const map = new Map()
map.set('IN', "India")
map.set('US', "USA")
map.set('FR', "France")

// console.log(map); -->

forEach loop:--
<!-- const conding = ["javascript", "python", "java", "cpp" ]

conding.forEach(element => {
    console.log(element)
}); -->

.filter():--
<!-- Returns the elements of an array that meet the condition specified in a callback function. -->
example:-- 
<!-- const mynums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
const newnums = mynums.filter( (num)  => {
    return num > 4
})
console.log(newnums) // [5, 6, 7, 8, 9, 10] -->

map():--
<!-- Calls a defined callback function on each element of an array, and returns an array that contains the results. -->

chainning:--
<!-- when you use multiple function\method use at a time 
.map().map.filter() -->

reduce:--
example:--
<!-- Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. -->
<!-- const array1 = [1, 2, 3, 4]
const initialvalue = 0;
const sumwithinitial = array.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    initialvalue
);

console.log(sumwithinitial); -->


DOM manupulation:--
<!-- document.getElementbyId
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName

document.querySelector
document.querySelectorAll -->

Node-list
<!-- .parentElement
.nextElementSibling
.childNodes 
.craeteTextnode-->


