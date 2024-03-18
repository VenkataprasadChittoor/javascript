for(let i=1;i<=5;i++){
    setTimeout(
        function(){
            console.log(i);
        }
    ),
    1000
}
let ob={
    name:"prasad",
    age:25
}
// ob={};
console.log(ob)


var prasad = function(){
return "hellow";
}
console.log(prasad());

let prasad1 = () => "hello Prasad";
console.log(prasad1());


var employee={
    id:1,
    greet:function(){
        setTimeout( ()=>{
            console.log(this.id);
        }
            ,1000
            )
    }
}
employee.greet();
//default function parameters

 add=(a=10,b=90)=> a+b;
console.log(add(20)); 
//restopertaor

let displayColors= function(message,...colors){
    console.log(message);
 for(let i in colors){
    // console.log(colors[i]);
    console.log(...colors);
 }
 }
 let message="Rest operator is used as a function arguments . list of colors";
 let message1="Spread is used for collection of object  .list of colors with spread operator"
 let colorArray=['yellow','blue','white'];
 displayColors(message,'red');
 displayColors(message,'red','pink');
 //spread operator
 displayColors(message1,...colorArray);
//string  with spread
 let str=" hi i am prasad";
 var charArr= {...str};
 console.log(charArr);

 //Array with spread

 let arr=[
    {
        name:"prasad",
        loc:"chennai",
        org:"mphasis"
    },
    {
        name:"venkat",
        loc:"bglr",
        org:"cg"
    }
 
]
var spread={...arr};
console.log(spread[0]);