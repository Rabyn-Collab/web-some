const a = 90;

const b = 100;

// console.log(a > b || a < b || a === b);
// console.log(a < b && a === 90 && a !== b);

// let isTrue = a > b ? 'true' : 'false';
// console.log(isTrue);

let age = 19;

if (age < 20) {
  console.log('junior ticket $10');
} else if (age > 20 && age < 50) {
  console.log('regular ticket $20');
} else {
  console.log('senior ticket $10');
}

// let i = 0;

// while (i < 20) {
//   i++;
//   console.log(i);
// }

const c = 'some';
const d = 'hello';
const id = 90;

// concat 

// const updateApi = 'http://baseUrl/updateProduct'
// const t = c + d + id;

// const url = `${updateApi}/${id}`;
// console.log(url);

const age1 = 90;

const m = 'lio';
console.log(`${m.toLocaleUpperCase()}`);

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

const numbers = [22, 55, 77, 99, 100];


for (let n in numbers) {
  console.log(n);
}
let total = 0;

for (let n of numbers) {
  total = total + n;
}

console.log(total);

