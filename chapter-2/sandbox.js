let myAge = 26;
let year = 2019;

//log things to console
// console.log(age, year);

/*age =30;
console.log(age);

const points = 100;
console.log(points);*/

var score = 75;
console.log(score);

// strings
console.log('hello, world');

let email = 'noura@test.com';
console.log(email);

// string concatenation
let firstName = 'Noura';
let lastName = 'Azeem';

let fullName = firstName + ' ' + lastName;
console.log('fullName');

// getting charachters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');

// common string methods

// let result = email.lastIndexOf('n');

// let result = email.slice(0,5);

// let result = email.substring(0,10);

// let result = email.replace('m', 'w');

let result = email.replace('n', 'w');

console.log('result');

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10 / 2);
let result = radius % 3;

console.log(result);

// order of operation B I D M A S

// let result = 5 * (10-3)**2;

let likes = 10;

// likes = likes + 1;
// likes++;
//likes--;

// likes += 10;
//likes -= 5;
// likes *= 2;
// likes /=2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + 'likes';
// console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called ' + title + ' by' + author + ' has ' + likes + ' likes'

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> This blog has ${likes} likes</span>
`;

// arrays
let ninjas = ['shaun', 'noura', 'nabila'];

// override a position
// ninjas[1] = 'ali'
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array methods
// let result = ninjas.join(',');
// let result = ninjas.concat(['ken', 'crystal']);

let result = ninjas.push('ken');
// push will change the result -- taking off ken
// pop will pop off and show ken
result = ninjas.pop();

// creating an undefined variable
let age = null;
// good to add a null such as when someone clears a form 
// console.log(age, age + 3, 'the age is ${age}');

// booleans & comparisions
// console.log(true, false, 'true;, 'false');
// console will color the above differently ^^

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');
// the consule will return true or false based on if the result is true
// console.log(result);

// comparision operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
// != will negate the command
console.log(age != 30);

