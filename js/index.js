let name = prompt("What is your name?");
let firstname = prompt("What is your firstname");
let money = +prompt("What is your money");
let birthday = +prompt("What is your birthday");
let birthmonth = +prompt("What is your birth month");
let birthyear = +prompt("What is your birth year");
let age1 = 2033;
let age2 =  age1-birthyear;
let age3 = 0;
for (let i = 2010; i <= 2020; i++){
  age3 =i-birthyear;
  console.log(age3);
}
console.log(name);
console.log(firstname);
console.log(money);
console.log(`${birthday}.${birthmonth}.${birthyear}`);
console.log(age2);
let a = (`${birthday}.${birthmonth}.${birthyear}`);
alert(`${name} ${firstname} ${money} ${a}`);
