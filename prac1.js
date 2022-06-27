// let a = 20;
// let b = 10;

// if(a < b){
//     console.log("A is less than B");
// }
// else{
//     console.log("A is greater than B");
// }


// let result = a < b ? "A is less than B" : "A is greater than B";
// console.log(result);

// let comp = a < b || a == b;

// comp = true;
// comp && console.log("A is greater than B");

// let comp = a < b ? "A bigger": "B bigger";
// console.log(comp);

// let A, B;
// let X = A + B;
// console.log('X = ' + X);

// let R, A;
// R = 2;
// A = 3.14159 * R * R;
// console.log(`A = ${A.toFixed(4)}`); 


// function sum(A, B) {
//   let SOMA = A + B;
//   console.log(`SOMA = ${SOMA}`);
// }

// sum(30, 10);
// sum(-30, 10);
// sum(0, 0,);


// function mod(i) {
//         let cas = [];
//         for(let j = 0; j <= i; j++){
//             if(i % j == 0){
//                 cas.push(j);
//             }
//         }
//         console.log(`Case: ${cas}`);
//     }

// mod(6);
// mod(8);
// mod(9);


// let str = "I am \'hemal\'";
// console.log(str);


// let arr = [
//     [1,2,3,4,5,6],
//     [233,4,5,5,6,7,7]
// ]

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// function twoSum(arr, target){

//     let ind = [];

//     for(let i = 1; i < arr.length; i++){
//       if(arr[0]+arr[i] == target){
//         ind.push(arr.indexOf(arr[0]), arr.indexOf(arr[i]));
//       }
//       else{
//         for(let j = arr.length - 1; j >= 0; j--){
//           if(arr[arr.length-1] + arr[j] == target){
//             ind.push(arr.indexOf(arr[arr.length - 1]), arr.indexOf(arr[j]));
//           }
//           else if(arr[i] + arr[j] == target){
//             ind.push(arr.indexOf(arr[i]), arr.indexOf(arr[j]));  
//           }
//         } 
//       }

//   }

//   console.log(ind);
//   }

//   twoSum([2,7,11,15], 9);
//   twoSum([5,7,8,9,0], 9);

// let n = 3.1416;
// let R = parseFloat(lines.shift());
// let A = n*Math.pow(R, 2).toFixed(4);
// console.log(A)

// let name = lines.shift();

// let salary = parseFloat(lines.shift());
// let sold = parseFloat(lines.shift());
// let rem = parseFloat((sold / 100)*15);

// let finalSalary = parseFloat(salary + rem).toFixed(2);
// console.log(`TOTAL = R$ ${finalSalary}`);



// function divi(a, b){
//     return a/b;
// }

// function multi(a, b, func){
//     function add(){
//         let n = a + b;
//         return n*func(a,b);
//     }
//     return add();
// }

// console.log(multi(3,4,divi));


// const calcul = (price1, price2) => {
//     let paid = price1 + price2;
//     console.log(`VALOR A PAGAR: R$ ${paid}`);
// }

// function prod(pro, unite, price){
//     return parseFloat(unite*price).toFixed(2);
// }

// let prod1 = prod(13,2,15.30);
// let prod2= prod(161, 4, 5.20);
// calcul(prod1, prod2);


// let prod1, prod2, uni1, uni2, price1, price2;

// prod1=12; prod2=16;

// uni1 = 1; uni2 = 2;

// price1 = 5.30; price2 =5.10;

// let paid = (uni1*price1) + (uni2*price2);
// console.log(paid.toFixed(2));





// function volume(R){
//     return parseFloat(4/3*Math.PI*Math.pow(R,3)).toFixed(3);
// }
// let vol = volume(3);
// console.log(`VOLUME = ${vol}`)


// let A, B, C;
// A = parseFloat(lines.shift()).toFixed(1);
// B = parseFloat(lines.shift()).toFixed(1);
// C = parseFloat(lines.shift()).toFixed(1);

// let triangle = parseFloat(1/2*A*C).toFixed(3);
// let circle = parseFloat(3.14159*C*C).toFixed(3);
// let trapezium = parseFloat(1/2*C*(A+B)).toFixed(3);
// let square = parseFloat(B*B).toFixed(3);
// let rectangle = parseFloat(A*B).toFixed(3);


// console.log(`TRIANGULO: ${triangle}`)
// console.log(`CIRCULO: ${circle}`)
// console.log(`TRAPEZIO: ${trapezium}`)
// console.log(`QUADRADO: ${square}`)
// console.log(`RETANGULO: ${rectangle}`)


// function prod(a, b, c) {
//     let paid = b * c;
//     return paid;
// }

// let paid1 = prod(parseInt(lines.shift()), parseInt(lines.shift()), parseFloat(lines.shift()).toFixed(2));
// let paid2 = prod(parseInt(lines.shift()), parseInt(lines.shift()), parseFloat(lines.shift()).toFixed(2))

// let paid = paid1 + paid2;
// console.log(`VALOG A PAGAR: R$ ${paid}`);


let arr = ["Hemal", "Sunny", "Sakib", "Khairul", "Masud"];

let i = -1;

let timer = setInterval(()=>{
    i += 1;
    console.log(arr[i]);
    if(i == arr.length - 1){
        clearInterval(timer);
    }
}, 1000)


