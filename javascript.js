// function Mammal(age) {
//     this.hair = true;
//     this.blood = "warm";
//     this.age = age;
// }

// function Person(name, nationality, age) {
//     Mammal.call(this, age)
//     this. name = name;
//     this.nationality = nationality;
// }

// Person.protoype = new Mammal();

// Person.prototype.secondNationality = function(secondNationality) {
//     this.secondNationality = secondNationality;
// }

// var john = new Person("John Miller", "German", 23);
// john.secondNationality("French");
// console.log(john)

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; 
}

function Account(balance, firstName, lastName) {
    Person.call(this, firstName, lastName)
    this.balance = balance;
}

Account.prototype.closeAccount = function(closedValue) {
    this.closedValue = closedValue;
}

var accounts = [];

function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value);
  var closedValue = document.getElementById('closedValue');
  account.closeAccount = closedValue.value;
  console.log(account)
  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
  closedValue.value = "";
}

window.accounts = accounts;

// var clickBoxOne = (function() {
//     var counter = 0;
//     var colors = ["green", "yellow", "purple"];
//     return function() {
//         counter++;
//         return document.getElementById("box-one").style.backgroundColor = colors[counter%3];
//     }
// })();

// var clickBoxTwo = (function() {
//     var counter = 0;
//     var colors = ["green", "yellow", "purple"];
//     return function() {
//         counter++;
//         return document.getElementById("box-two").style.backgroundColor = colors[counter%3];
//     }
// })();