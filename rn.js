// console.log("new");
// const counter = (() => {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.
//   function showMessage(text) {
//     // let age = prompt("Please confirm your age: ",18);
//     // if(text === undefined || age < 18) {
//     //     alert("Not text given or UnderAged");
//     // } else {
//     //     alert("The text provided is "+ text);
//     //     alert(count ?? "unknown");
//     // }
//     // var count;
//     console.log("new");
//     return text;
    

//   }
//   console.log(showMessage("random"));

// function ask(question, yes, no) {
//     if(confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
//   }

// function showOK() {
//     alert("All looks okay");
// }
// function showCancel() {
//     alert("It's Wrong!");
// }

// ask("Are you okay?", showOK, showCancel);

let anObject = n => n*2;
console.log(anObject(30));

function pow(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, (n - 1));
    }
}

console.log(pow(2, 4));

function factorial(n) {
    if(n === 1 || n === 0) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function paraMeter1(...args) {
   for(let arg in args) {
    console.log(args[arg]);
   }
}
function paraMeter2(firstParameter, secondParameter, ...laterOnes) {
    console.log(laterOnes.length);
} 
paraMeter1("random", "stuff", "that I want to", "write");
paraMeter2(1,3,2,3,4,5,6); 

function Fun() {
    let showArgs = () => console.log(arguments);
    showArgs();
}
Fun(1, 2, 3, 4);
let arr = [1, 2, 3, 4 , 5];
let arr2 = [7, 8, 9, 10];

let arr3 = [...arr, 6, ...arr2];

if ( JSON.stringify(arr) !== JSON.stringify()) {
    console.log(arr3);
}

// function inter() {
//     console.log("After a certain period of time");
// }
// setTimeout(inter, 1000);
// let timer = setInterval(()=> console.log("happened"),1000);
// console.log(timer);

//clearTimeout(timer);
//setTimeout(()=> {clearInterval(timer); console.log("stop");},5000);

/*function trying() {
    console.log("I am trying real hard, don't you think so too?");
}

let anID = setInterval(trying, 1000);

setTimeout(()=> { clearInterval(anID); console.log("Timer Ended"); }, 10000);
*/

// binding 

/*
let newObject = {
    name : "Tanyeem",
    namingFunction() {
        console.log(`${this.name} that I have set for this action`);
    }
}

let namingFunction = newObject.namingFunction.bind(newObject);
setTimeout(()=>namingFunction(),3000);

newObject.namingFunction =()=> {
    console.log("some new information");
}

let objectWithFunction = {
    name : "Apurba",
    function1() {
       console.log(`${this.name} in fun1`);
    },
    function2() {
        console.log(`${this.name} in fun2`);
     }
};

for (let key in objectWithFunction) {
    if(typeof objectWithFunction[key] == 'function') {
      objectWithFunction[key] = objectWithFunction[key].bind(objectWithFunction);
    }
}

let function1 = objectWithFunction.function1.bind(objectWithFunction);
let function2 = objectWithFunction.function2.bind(objectWithFunction);

setTimeout(()=>function1(),4000);
setTimeout(()=>function2(),5000);

objectWithFunction.function1 = ()=>{
    console.log("some new value");
}
objectWithFunction.function2 = ()=>{
    console.log("again some new value");
}
setTimeout(()=>objectWithFunction.function1(),4500);
*/

 let Tanyeem = { 
    ID : 182014050,
    Name : "Tanyeem As Safwan"
 };

 let Apurba = {
    ID : 182014055,
    Name : "Apurba Kumar"
 };

 function calling(anything) {
    console.log(`${anything}! You id is ${this.ID} and name is ${this.Name}`);
 }
 function callingArray(a,b,c) {
    console.log(`${a}, ${b}, ${c}! You id is ${this.ID} and name is ${this.Name}`);
 }

 calling.call(Tanyeem,"Hello there!");
 callingArray.apply(Apurba, ['Hello!', 'Are', 'You']);

 let user = {
    address : "26, Jump Street"
 };

 console.log(user?.address?.name);

 let students = {
    from : 0,
    to : 10,
    *[Symbol.iterator]() {
       for(let value =this.from; value <= this.to; value++) {
        yield value;
       }
    }
 }
 console.log(...students);

//random password generator using generator function
/*
 function* generateSquence(start, end) {
    for(let value = start; value <= end; value += (Math.floor(Math.random() * (4 - 1 + 1)) + 1)) {
        yield value;
    }
 }

 function* generatePassCodes() {
    yield* generateSquence(33, 44);
    yield* generateSquence(48, 57);
    yield* generateSquence(65, 90);
    yield* generateSquence(97, 122);
 }

 str = '';
 for (let code of generatePassCodes()) {
    str += String.fromCharCode(code);
 }
 console.log(str);
 */
//async iterator
/*
 let range = {
    from : 1,
    to : 10,
    [Symbol.asyncIterator]() {
        return {
            current : this.from,
            last : this.to,

            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (this.current <= this.last) {
                    return { done : false, value : this.current++ };
                } else {
                    return {done : true };
                }
            }
        };
    }
 };

 (async () => {
    for await (let value of range) {
        console.log(value);
    }
 })()
*/

//async iterator with generator function
/*
 let range2 = {
    from : 1,
    to : 3,
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve,1000));
            yield value;
        }
    }
 };

 (async() => {
    for await (let value of range2) {
        console.log(value);
    }
 })();
 */

 //json file
 /*
 let json = {
    name : "Tanyeem",
    ID : 182014050,
    courses : ['css', 'html', 'javascript']
 };

 console.log(JSON.stringify(json));
*/
 //a certain error [circular reference in json] avoiding via not including 
 // the property that causes the error such is occupiedBy was avoided
// also the use case of JSON is done here to get to JSON format and bk from JSON to object
/*
 let room = {
    number : 30
 };

 let meetup = {
    title : "Random",
    participants : [{name : "Tanyeem"}, {name : "Apurba"}],
    place : room,
    date : new Date()    
 };

 room.occupiedBy = meetup;
let jsonString = JSON.stringify(meetup,['title', 'participants', 'name', 'place', 'number','date'],2);

console.log(JSON.stringify(meetup,['title', 'participants', 'name', 'place', 'number','date'],2));

console.log(JSON.parse(jsonString));

let meetup2 = JSON.parse(jsonString, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  
console.log(meetup2.date.getDate());
*/

//working with map and converting between objects and maps
/*
let map = new Map();

map.set(1, "Value of int 1")
   .set('1',"Value of str1")
   .set(true, 'bool1')
   .set(Tanyeem, "Object Key");

//console.log(map.get(map.forEach(key=>{ return console.log(key);})));

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

map.forEach(logMapElements);

let objectMap = new Map(Object.entries(Tanyeem));

console.log(objectMap);

let fromMap = Object.fromEntries(objectMap);

console.log(fromMap);
*/

let set = new Set();

let john = { name : "John", id : 10 };
let pete = { name : "Pete", id : 5 };
let mary = { name : "Mary", id : 2};

set.add(john);
set.add(pete);

for (let user of set) {
    console.log(user.name, user.id);
}
set.forEach((value, set)=> {console.log(value)});


let weakSet = new WeakSet();

weakSet.add(john);
weakSet.add(pete);
weakSet.add(mary);

console.log(weakSet.has(john));
john = null;//weakset data containing john will get garbage collected
console.log(weakSet.has(john));

