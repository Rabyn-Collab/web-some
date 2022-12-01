

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
function greetY() {
  console.log('hello world');
}

const greetM = () => {
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

const f = 90;

const g = 100;

console.log(f > g || f < g || f === g);
console.log(f < g && f === 90 && f !== g);

// terninary operator

let isTrue = f > g ? 'true' : 'false';
console.log(isTrue);

let age = 19;

if (age < 20) {
  console.log('junior ticket $10');
} else if (age > 20 && age < 50) {
  console.log('regular ticket $20');
} else {
  console.log('senior ticket $10');
}



let i = 0;
// while loop
while (i < 20) {
  i++;
  console.log(i);
}


// template String

const updateApi = 'http://baseUrl/updateProduct'

const url = `${updateApi}/${id}`;


// const age1 = 90;
// const m = 'lio';
// console.log(`${m.toLocaleUpperCase()}`);

// for loop
for (let i = 1; i < 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('fizz buzz');
  } else if (i % 3 == 0) {
    console.log('fizz');
  } else if (i % 5 == 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}

// switch case
const medalType = 2;

switch (medalType) {
  case 1:
    console.log('gold medal');
    break;
  case 2:
    console.log('silvermedal');
    break;
  case 3:
    console.log('bronze medal');
    break;
  default:
    console.log('no medal');
}

const numbers1 = [22, 55, 77, 99, 100];


for (let n in numbers1) {
  console.log(n);
}
let total = 0;

for (let n of numbers1) {
  total = total + n;
}






// functions
function greet() {
  console.log('hello world');
}


// return functions
const greet1 = (name, age, greetType) => {
  const some = 95;
  return `${name} ${greetType} ${age} ${some}`;
}


const numbersV = [22, 77, 99, 100];
let sumTotal = 0;
for (let n of numbersV) {
  sumTotal = sumTotal + n;

}
console.log(sumTotal);



const person1 = {
  name: 'Ram',
  age: 90,
  job: 'dev',
  read: function () {
    console.log(`${this.age} is reading1`);
  }
};
person.read();


const personData = [
  {
    name: 'Avatar',
    rating: 9.5,
    detail: 'al;kd;lsakdl;sakdl;sakd',
    cast: ['ram', 'hari']
  },
  {
    name: 'U2',
    rating: 7.5,
    detail: 'al;kd;lsakdl;sakdl;sakd',
    cast: ['ram', 'hari']
  },
];



const random = Math.random();
// console.log(random * 20);
const r1 = Math.floor(random);
console.log(r1);

const date = new Date();
console.log(date.getFullYear());



setTimeout(() => {
  console.log('hello world');
}, 3000);


setInterval(() => {
  const date = new Date();
  console.log(`${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`);
}, 1000)





let total1 = 0;
const numbers2 = [22, 55, 77, 99];

numbers2.forEach((n) => {
  total = total + n;
});
console.log(total);
// numbers.push(90);
const isThere = numbers2.includes(90);
// numbers.pop();
// numbers.shift()
const m = numbers2.slice(2, 4);

// console.log(isThere);
// console.log(numbers);
// console.log(m);