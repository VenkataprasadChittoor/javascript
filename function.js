//creating a function
function greet1() {
  console.log("Hellow World");
}
greet1();
//function return a value
function greet2() {
  return "Hello Prasad";
}
let str = greet2();
console.log(str);
//function pasing a value
function greet(user) {
  return `Hello ${user}`;
}
let user = "prasad";
let str1 = greet(user);
console.log(str1);

// assiging a function to
let prasad = myFunction1(100, 30);
function myFunction1(a, b) {
  return a * b;
}
console.log(prasad);

//fuction expressions
let add = function (num1, num2) {
  return num1 + num2;
};
let result = add(5, 6);
console.log(result);

let val = 12;
if (val % 2 == 0) {
  console.log("value is even");
} else {
  console.log("value is odd");
}
return val;



function SecondLargest(arr) {
    
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
const values= [1, 2, 3, 4, 5, 6, 7];
const secondLargest = SecondLargest(values);
console.log("Second largest element:", secondLargest); 






	function print2largest(arr, arr_size) {
		arr.sort();
		arr.reverse();
		for (let i = 1; i < arr_size; i--) {
			if (arr[i] != arr[0]) {
				console.log("The second largest element is " + arr[i]);
				return;
			}
		}
		console.log("There is no second largest element<br>");
	}
	let arr= [ 12, 35, 1, 10, 34, 1 ];
	let n = arr.length;
	print2largest(arr, n);


