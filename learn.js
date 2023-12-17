// print

// console.log('Hello World');
// document.write('hello');
// alert('This is alert');

//javascript consol API

// console.warn("This is warning");
// console.error("This is error");
// console.log("Language Number", 5);



// var num1 = 5;
// var num2 = 9;

// console.log(num1 + num2);
// console.log(5 + 9);



// var arr = ['a', 'b', 1, 2, "ayush", "ayushi"];
// console.log(arr);



// var abc;  //by defult undefined
// console.log(abc);

// var ab = null;
// console.log(ab);



// //object

// var myobj = {
//     raj: 100,
//     life_status: 'good',
//     marrige: 'not yet',
//     plan: 'next lavel',
//     city: 'Jamanagar',
//     number: 9999999999
// };

// console.log(myobj);



// let array = ['a', 'b', 1, 2, "ayush", "ayushi", true];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// array.forEach(element => {
//     console.log(element);
// });



// function gread(cpi) {

//     if (cpi >= 9) {
//         console.log("A");
//     } else if (cpi >= 8 && cpi < 9) {
//         console.log("B");
//     } else if (cpi >= 7 && cpi < 8) {
//         console.log("C");
//     } else if (cpi >= 6 && cpi < 7) {
//         console.log("D");
//     } else {
//         console.log("F")
//     }
// }

// gread(9);
// gread(8);


// function rank(marks) {
//     let per = marks / 6;
//     let r = (per * 100000) / 100;
//     return 100000 - r;

// }

// let r = rank(594);
// console.log(r);



// let array = ['a', 'b', 1, 2, "ayush", "ayushi", true];
// array.push("Pass");
// console.log(array.length);
// array.pop();
// array.shift();
// let len = array.unshift("Deep");
// console.log(len);
// array.sort();       // first convert into string then sort data
// console.log(array);



// let str = "This is String";
// console.log(str.length);
// console.log(str.substring(4, 7));
// console.log(str.replace("String", "string"));
// console.log(str.indexOf("is"));
// console.log(str);



// let today = new Date();
// console.log(today);
// console.log(today.getTime());       // in seconds
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());



//DOM manipulation

let elm = document.getElementById('click me');
console.log(elm);

// let elemClass = document.getElementsByClassName('container');
// console.log(elm);

// //elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");                     

let paragraphs = document.getElementsByClassName('container');
paragraphs[0].classList.add("bg-primary");

// Selecting the Query
sel = document.querySelector('.container');
console.log(sel);

sel = document.querySelectorAll('.container');
console.log(sel);