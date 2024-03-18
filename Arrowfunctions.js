let add=()=>{
    console.log("Hello World");
    return 1;
}
console.log(add());

//using parameters in a function
let add1=(num1,num2)=> num1+num2;
let result=add1(5,6);
console.log(result);





let add2 = (num1,num2) => Math.abs(num1) + Math.abs(num2);
let result1 = add2(-5,-5)
console.log(result1)