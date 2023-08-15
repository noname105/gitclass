
console.log('hello javascript');

// 변수 선언과 함수 작성

var age = 25;
let year = 2023;
const point = 250;
const today = '광복절';

const pass = true;
const sale = '7.5';

if (pass) {
    console.log('hello');
}

console.log(age);
console.log(year);
console.log(point);

console.log(typeof(year));
console.log(typeof(today));
console.log(typeof(pass));

console.log(year + "_" + today);
console.log(point + sale);

let stringresult = Number(point) * String(year);
let result = Number(point) * Number(sale);

console.log(stringresult);
console.log(result);