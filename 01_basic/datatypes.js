/*console.log(typeof "Umar");
console.log(typeof 25);
console.log(typeof true);
string 
Number
Boolean

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
Object
Number
Object

let score = "50";

score = Number(score);

console.log(score);
console.log(typeof score);
50
Number

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Umar"));
true
false
false
true*/

/*console.log(Number("25"));
console.log(Number("25abc"));
console.log(Number(true));
console.log(Number(false));
25 
Nan 
1
0

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
false
true
false
object

console.log(typeof NaN);
console.log(typeof null);
console.log(typeof []);
console.log(Array.isArray([]));
undefined
null
object
object

console.log([] == false);
console.log([] === false);

console.log({} == false);
console.log({} === false);
true
false
true
false*/


/*console.log([] == 0);
console.log([] === 0);

console.log(Boolean([]));
true
false
true

console.log({} == false);
console.log({} === false);

console.log(Boolean({}));
true
false
true

console.log([] + []);
console.log([] + 1);
console.log({} + 1);
0
1
NaN

console.log(0 == false);
console.log(0 === false);

console.log("" == 0);
console.log("" === 0);
true
false
true
false*/

/*console.log([] + {});
console.log({} + []);
console.log([] + []);
"0[object object]"
"[object object]0"
""

console.log(typeof (function(){}));
console.log(function(){} + 1);
console.log((() => {}) + "1");
 ye prrha hi naehe 

 console.log([] == ![]);
console.log({} == !{});
console.log([] == []);
false
false
true*/

console.log([] + []);
console.log([] + {});
console.log({} + []);
""
"[object object]"
"[object object]"

console.log([] == false);
console.log({} == false);
console.log(0 == []);
true
false
true

console.log("10" + [] + 5);
console.log(10 + [] + "5");
console.log([] + 10 - 5);
"1005"
"105"
5
