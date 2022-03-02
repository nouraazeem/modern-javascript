// for loops

// for(let i = 0; i<7; i++){
//    console.log('in loop:', i);
//}
//
//console.log('loop finished');

/* const names = ['shaun', 'mario', 'luigi'];

// grab the person that corresponds to the order of their placement
for(let i = 0; i < names.length; i++){
    //console.log(i, names[i]);
    let html = `<div>${names[i]} </div>`
    console.log(html);
}
 */

/* // while loops
let i =0;
// infinite loop - 0 is less than 5, so we have to increment so we dont get stuck in an infinite loop
while(i < 5){
    console.log('in loop: ', i)
    i++;
}
 */
// example 2 - while loop
/* const names = ['shaun', 'mario', 'luigi'];
let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++
} */

// do while loop - even when there is exceptions to the code

/* let i=5;

do{
    console.log('val of i is:', i);
    i++;
} while(i < 5) */

// if statements
/* const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'mario', 'luigi', 'noura'];

if(ninjas.length >4){
    console.log("that's is a lot of ninjas")
} */

//else if statements
/* const pas = 'pas@1567';

if(pas.length >= 12 && pas.includes('@')){
    console.log('that password is mighty strong!')
    // or is ||
} else if(pas.length >= 8 || pas.includes('@' && pas.length >=5)){
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough')
}
 */

// logical NOT (!)

/* let user = false;

if(!user){
console.log('you must be logged in to continue')

}

console.log(!true);
console.log(!false); */

// break and continue

/* const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i])

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
} */

// switch statements
/* const grade = 'D';

switch (grade) {
    case 'A':
        console.log('you got an A!');
        break
    case 'B':
        console.log('you got a B!');
        break
    case 'C':
        console.log('you got a C!');
        break
    case 'D':
        console.log('you got a D!');
        break
    case 'F':
        console.log('you got an F!');
        break
    default:
        console.log('not a valid grade');
} */