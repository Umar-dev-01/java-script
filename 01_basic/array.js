//let arr = ["Ali", "Ahmed", "Umar"]
// first question saie sy nae ata
/*let fruits = ["pinApple", "Bnana", "Mango"]
fruits.push("Orange")
console.log(fruits);
fruits.pop()
console.log(fruits);

let fruits = ["pinApple", "Bnana", "Mango"]
console.log(fruits.includes("Bnana"))
console.log(fruits.includes("cake"))

let fruits = ["pinApple", "Bnana", "Mango"]
console.log(fruits.indexOf("Mango"))


let arr = [10,20,30,40,50];
console.log(arr.slice(1,4))
console.log(arr.splice(1,3))



//Ali, Ahmed, Umar, Hamza
let names = ["Ali", "Ahmed", "Umar", "Hamza"]
console.log(names[0])
console.log(names[3])
//who is the best
console.log(names.splice(1,2))
console.log(names)

let fruits = ["Apple", "Banana"];
fruits.push("Mango")
fruits.unshift("Orange")
console.log(fruits)

let numbers = [10,20,30,40,50];
numbers.pop()
numbers.shift()
console.log(numbers)


let cities = ["Lahore","Karachi","Islamabad","Peshawar"];
console.log(cities.indexOf("Islamabad"))
console.log(cities.findIndex("Quetta"))

let arr = [5,10,15,20,25,30];
console.log(arr.slice(2,5))
console.log(arr)

let arr = [5,10,15,20,25,30];
arr.splice(10,15,20)
console.log(arr)

let colors = ["Red","Blue","Green"];
colors.join()
console.log(colors)

let marks = [80,90,70];
marks.push(100)
marks.unshift(60)
console.log(marks)


let arr = ["A","B","C"];

arr.push("D");
arr.shift();
arr.unshift("Z");
arr.pop();

console.log(arr);
out is "Z","B","C"



let arr = ["Laptop", "Mouse", "Keyboard", "Monitor"]

console.log(arr[1])
//console.log(arr.find("Monitor"))

console.log(arr.indexOf("Keyboard"))
arr.push("Speaker")
console.log(arr)
arr.shift()
console.log(arr)


let fruits = ["Apple", "Banana", "Mango"];
//Apple | Banana | Mango
console.log(fruits.join("|"))

let arr = [1,2,3,4,5,6];
//[2,3,4]

console.log(arr.splice(1,3))

/*
let arr = [1,2,3,4,5,6];
//2,3,4
console.log(arr.splice(1,3))
console.log(arr)


// slice and splice ki abhi etni smjh nhen hy splice phir bhi koch na koch smjh a gia hy slice na aia 

let fruits = ["Apple","Banana","Mango"]

console.log(fruits.join("-"))

console.log(fruits.include("Apple"))

console.log(fruits.splice(2,4))

console.log(fruits.length())



console.log(arr.indexOf("ALi"))
// jo jo ziada importnt hoty hn on py ziada dhian dia kro


//let arr = [10,20,30,40,50];
//20
//30
//40

//console.log(arr.slice(1,4))
//console.log(arr)
console.log(arr.splice(1,3))
console.log(arr)

//hint na dia kro ab to ap hint dyd ety ho mn kr leta hon jb bad men jata hon to bhol jata hon k kis kam k liy konsa function ya 
//ya kia use krna hota hy
//arry to 0 sy start hota hy lk slice and splice 1 sy keon 

//mojhy abhi function and property ki koe smjh nhen hy k kesy phchan ki jati hy and keon use kiy jaty hn 


//Q1. arry koe bhi bhot si chezon ko akhta ek block mn likhny k liy use hota hota hy
//Q2. keon k arry ka rule hy k indexing 0 sy start ki jay(ans nae pta eska apny sy chora)

//Q1. 
// let arr = ["HTML", "CSS", "JavaScript"];
console.log(arr.length)
console.log(arr[2])
Q2
let nums = [1,2,3];
nums.push(4)
nums.unshift(0)
console.log(nums)
Q3
let fruits = ["Apple","Banana","Mango"];
console.log(fruits.includes("Banana"))
console.log(fruits.indexOf("Mango"))
/*
Q4
let arr = [5,10,15,20,25];
//10,15,20
console.log(arr.slice(1,4))
console.log(arr)

console.log(arr.splice(1,3))
console.log(arr)

let marvel = ["Ironman", "Thor", "Hulk"];
let dc = ["Batman", "Superman"];
let marvel= dc()
consol.log(marvel.concat(dc))

let arr1 = [1, 2];
let arr2 = [3, 4];

arr1.push(arr2);

console.log(arr1);
//[1,2,[3,4]]

let arr1 = [1, 2];
let arr2 = [3, 4];

let arr3 = arr1.concat(arr2);

console.log(arr3);
console.log(arr1);
//[1,2,3,4]
//[1,2]

let arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(arr.flat())
//true
//false
//false

console.log(Array.from("Umar"));
//"u","m","a","r"



let arr1 = [100]
let arr2 = [200]
let arr3 =[300]

let marvel = ["Ironman", "Thor"];
let dc = ["Batman", "Superman"];

let heroes = marvel.concat(dc);

console.log(Array.isArray(heroes));

console.log(Array.from("JS"));

console.log(Array.of(1,2,3));

//Agar mere paas 3 arrays hain aur mujhe unhe ek array me merge karna hai, to tum kaun sa method prefer karoge aur kyun?
//ans is (...)

let fruits = ["Apple", "Banana"];
let vegetables = ["Potato", "Tomato"];
let food = fruits.vegetables
console.log(...fruits,...vegetables)
console.log(food)


let a = [1,2];
let b = [3,4];
let c = [5,6];
console.log(...a,...b,...c)

let a = [10,20];
let b = [30,40];
a.push(b);

console.log(a.length);
console.log(a[2]);
//4
//30

let a = [10,20];
let b = [30,40];
let c = [...a,...b];

console.log(c.length);
console.log(c[3]);
//3
//40


let arr = [1,[2,[3,[4,[5]]]]];
console.log(???(arr))


console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray("[]"));
console.log(Array.isArray(123));
//false
//false
//false
//true


console.log(Array.from("Pakistan"));
"P","a","k","i","s","t","a","n"

let x = 50;
let y = 100;
let z = 150;
console.log((Array.of(x,y,z).length))

let a = ["A","B"];
let b = ["C","D"];

let c = a.concat(b);

console.log(Array.isArray(c));

console.log(Array.from("ABC"));

console.log(c.length);

console.log(Array.of(1,2));

//concat() aur spread (...) me se tum kis ko prefer karoge aur kyun?
//ans(concat ko keon k es men arrys k sath single value bhi alg sy add ho skti hy)
//Array.from() aur Array.of() me kya difference hai?
//ans i dont know
?



let a = [1,2];
let b = [3,4];

console.log(a.push(b));
console.log(a);
//1,2,3,4
//1,2
/*
let a = [1,2];
let b = [3,4];

let c = [...a,...b];

console.log(c);
console.log(c.length);
//1,2,3,4
//3
//mn smjha counting 0 sy strat hoti hy and agr mn  ny ghlti ki ho to btaia kro k ye esy saie ho ga

console.log(Array.isArray([]));
console.log(Array.from("JS"));
console.log(Array.of(10,20,30));
true
true 
true*/

//true

  //Q2. false Q3. [" A", "I"] Q4. [100,200,300 ]
  //  Q5. Array.isArray()  pochta hy dekhta hy k ye arry hy k nae Array.from()  
  //  ye strings ko arry bnata hy Array.of()  numbers ko arry bnata hy

  /*let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express"];
frontend.push(backend)
console.log(frontend)

//lkn ye nhen likha k arrays k andr arrays ho ya na ho wrna ... use kr lety
let name = "Umar";
console.log(Array.from(name))

let a = 10;
let b = 20;
let c = 30;
let d= [...10,...20,...30]
console.log(d)
*/
//let data = {name: "Umar"};
//true
/*
let arr1 = [1,2];
let arr2 = [3,4];

let result = [...arr1, 100, ...arr2];

console.log(result);
//[1,2,3,100,3,4]


let arr = [1,[2,[3,[4]]]];
console.log(arr.flat(Infinity));
//[1,2,3,4]


let mobiles = ["iPhone", "Samsung"];
let laptops = ["Dell", "HP"];
let watches = ["Apple Watch", "Galaxy Watch"];
let products = [...mobiles,...laptops,...watches]
console.log(products)


let text = "AI";

console.log(Array.from(text));

console.log(Array.isArray([]));

console.log(Array.of(5,10));

*/

