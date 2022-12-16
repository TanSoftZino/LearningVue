let dateNow= new Date();
function day()
{
    return dateNow;
}
const prompt=require("prompt-sync")({sigint:true}); 

/*let inputValue = prompt("Please enter the number 5: ");
if(inputValue == "5")
{
    console.log("never mind");
    var x=10;
    console.log(parseInt('101',0));
}
else 
{
    console.log("you dumb bro")
}
console.log(x);
(function(){
    "use strict";
    function greetMe(yourName)
    {
        console.log(`Hello ${yourName}`);
    }

    greetMe('Tanyeem');
})();
// const fish = ['Lion', , 'Angel'];
// fish.push('Now');
// console.log(fish[3]);
// const method = 'sales';
// function carCompany(Name)
// {
//     return Name === 'Honda' ? Name:`Sorry, we do not sell ${Name}`;
// }
// const allInfo = {type: method, model: carCompany("Honda")};
// console.log(allInfo.model);

//     let type = 'mango';
//     function weights(weight)
//     {
//         return weight === '70kg' ? weight : `Not ${weight} detected`;
//     }
//     //in cerain case instead of using . you need to use [''] cause of the symbols or empty string

// const inform = {"": type, "!": weights("nvm")};
// console.log(inform['!']);

for(let i = 0;i < 2; i++)
{
    console.log("\n");
    let fruits = prompt("Please entet the fruit that you want: ");
    switch(fruits){
        case "Mango":
            console.log("The mangoes are 20 dollars a pound");
            break;
        case "Oranges":
            console.log("The oranges are 30 dollars a pound");
            break;
        default:
            console.log(`Sorry we do not have ${fruits}`);
    }
}
function forException()
{
    try{
        throw 'new';
    }
    catch(e){
      return true;
    }
    finally{
        return true;
    }
}
console.log(forException());

function divisable(certainValue)
{
    let x = 20,temp;
    if(certainValue == 0){
        throw new Error("Cannot be divided by zero");
    } else {
      temp = x/certainValue;
      console.log(temp);
    }
    try 
    {
        let value = 20/0;
        console.log(value);
    } catch(e) {
       //console.error(e.name);
       console.error(e.message);

    }
    function nestedloopwithLabel()
    {
        let i=0;
        loopMark: while (i<10) {
            i++;
            console.log(i);
            for (let j = 0; j < 5;j++)
            {
                console.log("Day");
                if (i === 1 && j === 3) {
                    break loopMark;
                }
            }
        }
    }
nestedloopwithLabel();
    
}
divisable(20);

function forIOLooping()
{
  let x = ["first", "second", "third"];
  x.prop = "random";
  for (let i in x) {
    console.log(i);
  }
  
  for (let i of x) {
    console.log(i);
  }
}
forIOLooping();

function car(anObject)
{
    anObject.make = "Honda";
}
carInfo = {buddy: 'nothing', buddyx: 'random', make: 'notHonda'};

const xInfo = carInfo.make;

car(carInfo);

const yInfo = carInfo.make;
console.log(xInfo);
console.log(yInfo); */

// function passingArray(arr){
//     arr[0] = 40;
// }

// const arr = [20];

// console.log(arr);
// passingArray(arr);
// console.log(arr);

// function factorial(value) {
//   return value < 2 ? 1 : value * factorial(value-1);
// }

// console.log(factorial(4));

// function forCube(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0;i < a.length;i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const f = function (x) {
//     return x * x * x;
// }

// const array = [0, 1, 2, 3, 4, 5];
// const cube = forCube(f, array); 
// console.log(cube);

// const obj = {
//     1: "Lang",
//     2: "u",
//     3: "age"
// };

// let r = "";
// //Object.keys(obj).forEach((x)=> r += obj[x]);
// objName = "obj";
// Object.keys(obj).forEach((i)=> r += `${objName}.${i} = ${obj[i]}\n`);
// console.log(r);

// const School = new Object();
// let num = prompt("enter a value: ");
// console.log("\n");
// for (let i=0; i < num;i++) {
//   School[i] = prompt("Please enter value ${i}: ");
// }
// function rObject(obj, objName) {
//     let result = "";
//     Object.keys(obj).forEach((i)=> result += `${objName}.${i} = ${obj[i]}` + " ");
//     console.log(result);
// }
// rObject(School,objName);

// class RandomClass{
//   constructor(...values){
//     this.values = [...values];
//   }
// }

// const aReferance = new RandomClass("apple", "orange");
// console.log(aReferance.values);

// class WorldCup{
//     constructor(...values) {
//         this.values = values;
//     }
//     setAGoal(AGoal) {
//       this.values["Argentina"] = AGoal;
//     }

//     setBGoal(AGoal) {
//       this.values["Brazil"] = AGoal;
//     }

//     setBaGoal(BaGoal) {
//       this.values["Bangladesh"] = BaGoal;
//     }

//     getAGoal() {
//         return this.AGoal; 
//     }

//     getBGoal() {
//         return this.getBGoal;
//     }

//     getBaGoal() {
//         return this.BaGoal;
//     }
// }

// const Goal = new WorldCup(3,4,5);

// Goal.setAGoal(20);
// console.log(Goal.getAGoal());

// const tanyeemObject = {
//     a : 20,
//     name : "Tanyeem As Safwan",
//     ID : 182014050,
//     myMethod : function(){
//         console.log("I have tried something new");
//     }   
// };
// const apurbaObject = {
//     a : 30,
//     name : "Apurba Kumar",
//     ID : 182014048,
//     myMethod : function(){
//         console.log("Apurba Have tried something new");
//     }
// };

// function callingCard() { 
//     console.log(`${this.name} has been used in case of ${this.ID}`);
// }

// tanyeemObject.callingCard = callingCard;
// apurbaObject.callingCard = callingCard;

// tanyeemObject.callingCard();
// apurbaObject.callingCard();


// class MyClass{
//     constructor(... values){
//         this.values = values;
//     }
// }

// class MyClass2{
//     #value;
//     constructor(value){
//         this.#value = value;
//     }

//     getValue() {
//         return this.#value;
//     }
    
//     setValue(value) {
//         this.#value = value;
//     }

// }

// class MyClass3{
//     #value;
//     constructor(...value) {
//         this.#value = value;
//     }

//     getValue() {
//         return this.#value;
//     }

//     setValue(value) {
//         this.#value[0] = value;
//     }
// }



// const classObject = new MyClass(120, "New", "street");
// Object.values(classObject).forEach(element => console.log(element));

// const classObject2 = new MyClass("Name", " that", " I", " have", " said");
// Object.values(classObject2).forEach(element=> console.log(element));

// const privateObject = new MyClass2("random");
// console.log(privateObject.getValue());

// const privateArrayObject = new MyClass3(182014048, "Tanyeem");
// console.log(privateArrayObject.getValue());
// privateArrayObject.setValue(182014050);
// console.log(privateArrayObject.getValue());

// 'use strict';

// const randomObject = {};
// Object.defineProperty(randomObject, "x", { value : 42, writeable : false });
// randomObject.x = 5;
// console.log(randomObject.x);

// const fixed = {};
// Object.preventExtensions(fixed);
// fixed.ne = "random";
// console.log(fixed.ne);

// function f(a) {
//     "use strict";
//     a = 42;
//     return [a, arguments[0]];
//   }
// const pair = f(17);
// console.assert(pair[0] === 42);
// console.assert(pair[1] === 17);
  
// "use strict";
// function fun() {
//   return this;
// }

// class Color {
//     #values;
//     constructor(r, g, b) {
//       this.#values = [r, g, b];
//     }

//     toString() {
//         return this.#values.join(", ");
//     }
// }

// class ColorWithAlpha extends Color{
//     #alpha;
//     constructor(r, g, b, a) {
//       super(r, g, b);
//       this.#alpha = a;
//     }

//     get alpha() {
//         return this.#alpha;
//     }

//     set alpha(value) {
//         this.#alpha = value;
//     }

//     toString() {
//         return `${super.toString()}, ${this.#alpha} `;
//     }
    
//     // static isValid(r, g, b, a) {
//     //     return super.isValid(r, g, b) && a >= 0 && a <= 1;
//     // }
// }

// const color = new ColorWithAlpha(255, 0, 0, 0.5);
// console.log(color.toString());
// //console.log(color.isValid(255, 0, 0, -1));

// new Promise((resolve, reject) => {
//     console.log("Initial");
  
//     resolve();
//   })
//     .then(() => {
//       throw new Error("Something failed");
  
//       console.log("Do this");
//     })
//     .catch(() => {
//       console.error("Do that");
//     })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//     });
// const promise = new Promise((resolve, reject) => {
//     console.log("Promise callback");
//     resolve();
//   }).then((result) => {
//     console.log("Promise callback (.then)");
//   });
  
//   setTimeout(() => {
//     console.log("event-loop cycle: Promise (fulfilled)", promise);
//   }, 0);
  
//   console.log("Promise (pending)", promise);
  
// function* gen() {
//   yield* ['a', 'b', 'c'];
// }
// console.log(gen().next().value)

// function* fibonacchi() {
//   current = 0;
//   next = 1;
//   while(true) {
//     const reset = yield current;
//     [current, next] = [next, next + current];
//     if(reset) {
//       current = 0;
//       next = 1;
//     }
//   }
// }

// const sequence = fibonacchi();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);

// const parent = {
//   a : 4,
//   method() {
//     return this.a+1;
//   },
// }

// const child = {
//   __proto__: parent,
// }

// child.a = 5;//assigning value on child, not parent
// console.log(child.method());
// console.log(parent.a);





// function Box(value) {
//   this.value = value;
// }

// Box.prototype.getValue = function () {
//   return this.value;
// };

// const boxes = [
//   new Box(1),
//   new Box(2),
//   new Box(3),
// ]

// function Square(value) {
//   return this.value = value * value;
// }

// Square.prototype.getValue = function () {
//   return this.value + 1;
// }

// const square = new Square(2);
// console.log(square.getValue());

// const animal = {
//   random : 40,
//   walk() {
//     console.log("Walking");
//   },
// }

// const rabit = {
//   charac : "animal",
//   __proto__:animal,
// }

// console.log(rabit.walk());

// let user = {
//   name : "Tanyeem", 
//   surname : "Safwan",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// let admin = {
//   __proto__: user,
//   isAdmin : true,
// }

// console.log(admin.fullName);

// admin.fullName = "Apurba Kumar";

// console.log(admin.fullName);
// console.log(user.fullName);

// const rabbit = {
//   walk() {
//     if (!isSleeping) {
//       console.log("walking");
//     } else {
//       console.log("sleeping");
//     }
//   },
//   sleep() {
//     isSleeping = true;
//   }
// };

// const whiteRabbit = {
//   name : "White Rabbit",
//   __proto__: rabbit
// };

// whiteRabbit.sleep();
// whiteRabbit.walk();
// console.log(rabbit.isSleeping);
// for(let prop in whiteRabbit) { 
//   console.log(prop);
// }

// function user(email, name) {
//   this.name = name;
//   this.email = email;
//   this.logged_in = false;
// }
// user.prototype.login = function () {
//  this.logged_in = true;
//  console.log(`${this.email} has logged in`);
// }
// user.prototype.logout = function () {
//   this.logged_in = false;
//   console.log(`${this.email} has logged out`);
// }

// const userOne = new user("Tanyeem@gmail.com", "Safwan");
// const userTwo = new user("Apurba@gmail.com", "Kumar");

// //console.log(userOne);
// userOne.login(userOne);

// const animal = {
//     eats : true
// };

// const rabbbit = Object.create(animal, {
//     jumps : {
//         value : true
//     }
// });

// let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptor(animal));

// console.log(clone.eats);
// console.log(rabbbit.jumps);
// console.log(rabbbit.eats);

// function* generateReport() {
//     yield "Report 1";
//     yield "Report 2";
//     yield "Report 3"
// }

// generate = generateReport();
// for(let value of generate) {
//     console.log(value);
// }

const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
  



