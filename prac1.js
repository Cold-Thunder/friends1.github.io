
let arr = ["Hemal", "Sunny", "Sakib", "Khairul", "Masud"];

let i = -1;

let timer = setInterval(()=>{
    i += 1;
    console.log(arr[i]);
    if(i == arr.length - 1){
        clearInterval(timer);
    }
}, 1000)


