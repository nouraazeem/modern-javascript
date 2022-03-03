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

const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);