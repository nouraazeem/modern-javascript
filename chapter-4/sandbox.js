/* // function declaration
function greet(){
    console.log('hello there');
}

// function expression
const speak = function(){
    console.log('good day!')
};

/* greet();
greet();
greet(); */

/* const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}`)
}; */

//speak('mario');
//speak('mario', 'morning');

// returning values
/* const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(area){

};

calcVol(area) */

// regular function
/* const calcArea = function(radius){
    return 3.14 * radius**2;

 */

// arrow function -- has to be 1 parameter
/* const calcArea = (radius, ) => {
    return 3.14 * radius**2;
}; */

/* const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area); */

// practice arrow functions

// before
/* const greet = function(){
    return 'hello, world';
} */

// new
/* const greet = () => 'hello, world';

const result = greet();
console.log(result); */

// another example
/* const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    } 
    return total;
}
console.log(bill([10,15,30], 0.2));
 */

/* const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    } 
    return total;
};
console.log(bill([10,15,30], 0.2));
 */

/* const name = 'shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo); */

// callbacks & foreach

/* const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
})
 */
/* let people = ['mario', 'luigi', 'ryu', 'shaun', 'noura']

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson);
 */
/* people.forEach((person, index) => {
    console.log('something', person, index);
}); */

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'noura'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple"> ${person}</li>`;
});

console.log(html);
ul.innerHTML = html