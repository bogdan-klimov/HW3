// // /////////////////////////////////////////////////////1
// randomNumber = [];

// arr = [2, 3, 2]

// for (let i = 0; i < 16; i++) {
//     randomNumber.push(Math.round(Math.random()* 15));
// }    

// console.log(randomNumber);

// // ////////////////////////////////////////////////////2

// let lines = 8;

// let str = " ";

// let slesh = "#";

// for(var i = 0; i < lines; i++){
//     str += slesh;
//     console.log(str);
// }

// ///////////////////////////////////////////////////3

// arr2 = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < arr2.length; i++)  {
//     if (i > 3 & i < 10) {
//         console.log (i);
//     }
// }

/////////////////////////////////////////////////////4

const array = [1, 3, 9, 4, 7, 3, 0, 5, 8, 1, 0];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log(i);
    }  
}
