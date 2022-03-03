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

const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}`)
};

speak('mario');
//speak('mario', 'morning');