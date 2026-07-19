
/*let user= {
    name : "Umar",
age : 20,
city : "Lahore"
};
console.log(user)

console.log(user.name)
console.log(user.city)
user.Profession = "Student",
console.log(user)


user.age=21,
console.log(user)

//delete.user(city)
//console.log(user)


let user = {
    name: "Ali",
    age: 22
};

console.log(user.name);
console.log(user["age"]);
//'Ali'
//22

let user = {
    "full name": "Muhammad Umar"
};
console.log(user["full name"]);
//Muhammad Umar


let user = {
    name: "Ali"
};
Object.freeze(user);
user.name = "Ahmed";
console.log(user);
//name: 'Ali'

let user = {
    name : "Umar",
    age :20
}
console.log(user.name)
user.city = Lahore,
Object.freez(user)

// Object aur Array me kya difference hai?
// Dot notation aur bracket notation me kab use karte hain?
// Object.freeze() ka real-life use kya ho sakta hai?
object keys and keys ka data store krny k liy use hota hy jo k ksi ek entity ki information hota
array differnt attribute store krny k liy use hota hy 
dot notation choti value ko call krny k liy or brackt notation jin values mnn space ho onhen call keny k liy 
object freeze ka real life men nhen pta lkn programing mn frezz kr deta hy keys ki value ko phir wo change nhen ho MediaStreamTrackEvent
// bonus waly ka ans (. notation keon k value mn space nhen hy)





let student = {
    name: "Umar",
    age: 20
};
student.age=21,
student.Smester= 6,
delete student.name,
console.log(student)

Q2
'Toyota'
 'Toyota'
 'Corolla '

 let Book ={
title : "JavaScript",
Author : "Hitesh",
Price : 1500,
 }
 Book.Price =1800
 Book.pages = 500
 delete Book.Author
 console.log(Book)

 Q4
  name: "Ali"
  city = "Lahore"

let mobile = {
name : "Samsung",
price : 50000,
}
console.log(mobile["price"])
Object.freeze(mobile)
mobile.name = "iPhone",


//console men kesy kron 
 
let laptop ={
Brand: "Apple",
Model:"c9g13",
RAM : 256,
Storage:"8GB",
Price:"120k"
}
laptop.RAM= 512
laptop.warranty= "5 Years"
delete laptop.price
Object.freeze(laptop)
laptop.Brand= "hp"
console.log(laptop)

Q8
'Umar'
'age'
'Umar'
'age'


let University={

Name: "Umar",
Semester: 4,
CGPA: 3.2,
Department:"IT",
}
console.log([University.Name])
console.log([University.CGPA])


let employee = {
    name: "Ali",
    salary: 80000
};
employee.salary=90000
employee.department="IT"
//print krny ka to nae kha lkn pta kesy chly ga k  update hoia sb
console.log(employee)

//last ans (Umar, Umar, Umar)





let user = {
    name: "Umar",
    age: 20
};
let key = "name";
console.log(user[key]);
console.log(user.key);
Umar 
undefined

let user = {
    city: "Lahore"
};
console.log(user.country);
console.log(user["country"]);
undefined
undefined

let user = {
    name: "Ali"
};
Object.freeze(user);
user.name = "Ahmed";
user.city = "Islamabad";
console.log(user);
//name: "Ali"
//city = "Islamabad"

let student = {
    name: "Umar",
    cgpa: 3.4
};
console.log(student["cgpa"])

let laptop = {
brand : "HP",
ram : "8GB"
}
console.log(laptop.brand);
Object.freeze(laptop);
laptop.Price = 120000;
delete laptop.ram;



//10
// undefined
// 10
// undefined

let employee = {
    name: "Ali",
    salary: 80000
};
employee.salary=90000;
employee.Department="IT";
Object.freeze(employee)
employee.salary=100000;
console.log(employee)

// Umar 
// undefine
//  undefine 
//  Umar



let  Student={
Name :"Umar",
Age : 20,
City : "Lahore",
};
Student.Age=21;
Student.Semester = 4;
delete Student.City;
Object.freeze(Student);
Student.Name = "Ali";
console.log(Student)

let Mobile={
Brand: "red",
Model:302,
Price:1390,
};
Mobile.Color = "Black";
Mobile.Price=1550;
Object.freeze(Mobile);
Mobile.Warranty = "1 Year";
console.log(Mobile);
*/

let Employee={
Name: "MMM",
Salary: 15000,
Department: "Finance"
};
Employee.Salary=20000;
Employee.Experience = "2 Years";
delete Employee.Department;
Object.freeze(Employee);
Employee.Salary= 30000;
Employee.Experience = "5 Years";
console.log(Employee)

let Laptop={
Brand:"Apple",
RAM:"8GB",
Storage:"45GB",
Price:95000,
Processor:"8GB",
};
Laptop.RAM="10GB";
delete Laptop.Price;
Laptop.Warranty= "5years";
console.log(Laptop);

