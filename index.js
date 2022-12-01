
const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "gender": "male"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "gender": "male"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "gender": "female"
  }
];

const newData = data.filter((m) => {
  return m.gender == 'female';
});
const newData1 = data.find((m) => {
  return m.id == 1;
});
const numbers = [22, 55, 77, 99, 100];

const newNum = numbers.map((n) => {
  return n * 2;
});

const dataMap = data.map((d) => {
  return d.title;
});
const person = {
  name: 'ram',
  age: 90
};
const { name, age } = person;
console.log(age);
const dataArray = ['hari', 'shyam'];
const [mi, to] = dataArray;
console.log(mi);
// console.log(dataMap);
// console.log(newNum);
const sumOf = numbers.reduce((p, n) => {
  //  22 55
  //  77 77
  //  154 99
  return p + n;
});
// console.log(sumOf);

// console.log(newData);
// console.log(newData1);