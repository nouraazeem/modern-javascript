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

let i=5;

do{
    console.log('val of i is:', i);
    i++;
} while(i < 5)