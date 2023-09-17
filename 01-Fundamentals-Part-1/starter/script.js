/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

//writing the variables

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.14; // write constants  in uppercase

*/

/*

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "raghav");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);

*/

/*

let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1999;   cant change  cost

// const job;   thisi willl  show error

var job = "programmer";
job = "chef";

*/

/*

const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3  means 2 to  the power of 3 = 2 * 2 * 2

const firstName = "Raghvendra";
const lastName = "Singh";
console.log(firstName + " " + lastName);

//  Assignment  operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//  comparison  operators
console.log(ageJonas > ageSarah); //  >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

*/

/*

const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

/*

const firstName = "Raghvendra";
const job = "teacher";
const birthYear = 1998;
const year = 2037;

const raghvendra =
  "I'm " + firstName + ",a " + (year - birthYear) + "years old " + job + "!";
console.log(raghvendra);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year  old ${job}`;
console.log(jonasNew);

console.log(`string
multiple
lines`);

*/

/*

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is  too young. Wait another ${yearsLeft} years:`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

//   type conversion

/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//  type coercion
console.log("I am" + 23 + "years old");

*/

// 5 falsy values: 0, '', undefined, null, NaN

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonsas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

*/

// equality operators  '==' vs '===' it is strict equal and does not perform type coercion

const age = 18;
if (age === 18) console.log("you just became an adult");

if (age == 18) console.log("you just became an adult");
