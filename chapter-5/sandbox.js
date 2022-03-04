// object literals

/* let user = {
    name: 'crystal',
    age: 30,
    email: 'noura@gmail.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make w tahina']
};

console.log(user.blogs[1]);

user.age = 35;
console.log(user.age);
console.log(user['name'])

user['name'] = 'noura';
console.log(user['name']);

console.log(typeof user); */

/* const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with tahina', likes: 50 }
];

console.log(blogs); */
/* 

let user = {
    name: 'crystal',
    age: 30,
    email: 'noura@gmail.com',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with tahina', likes: 50 }
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
console.log(this);

/* user.login();
user.logout();

const name = 'mario';
name.toUpperCase(); */ 

// math object 

/* console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); */

// primitive values
/* let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
 */
// reference values

 userOne = { name: 'noura', age: 30 };
 userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
