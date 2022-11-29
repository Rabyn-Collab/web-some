

/*
multiline comment
*/


// single line comment

//string
let userName = 'ram hari';
console.log(userName.length);
console.log(userName.toLocaleUpperCase());
console.log(userName.replace('ram', 'sita'));
console.log(userName.trim());
console.log(userName.substring(0, 2));
console.log(userName.includes('m'));
console.log(userName.slice(1, 2));

//number
const a = 90;
const b = 100.100;
console.log(a.toString());
console.log(typeof (a)); //check type
console.log(b.toFixed(2));


//boolean
const isLogin = true;
const isRegister = false;

//Undefined
let un;
let c = undefined;

//null
let imageFile = null;

//Array
const colors = ['white', 'green', 'blue'];
const numbers = [22, 55, 77, 99];

//object
const person = {
  'name': 'sam',
  'age': 90,
  'job': 'banker'
};

//function
function greet() {
  console.log('hello world');
}

const greet1 = () => {
  console.log('namaste world');
}


//arthimetic operators
let x = 90;
let y = 100;
x++;
x--;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


//comparison operator
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y);
console.log(x !== y);