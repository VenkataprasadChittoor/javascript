//Arrays destructuring
let employee=["john","cena","male"];
let [firstname,lastname,gender]=employee;
console.log(`${firstname}${lastname}${gender}`)


console.log("distancve of everey programs");

let employee1=["john","cena","male","bangalore"];
  let [firstname1,...elements]=employee1;
  console.log(`${firstname}`);
  console.log(`${elements}`);



  //object destructuring

  let emplyee3={
    name:"hi",
    age:25,
    loc:"bglr"
  }
  let {name,age,loc}=emplyee3;
  console.log(`${name}${age}${loc}`);