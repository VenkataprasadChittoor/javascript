function Prasad(name,tech){
    this.name=name;
    this.tech=tech;
    this.work=()=>console.log("working from morning");
    console.log(this.work());
    }
let venkat=new Prasad('Venkataprasad',"js");
let venkat1=new Prasad('Venkataprasad',"css")
console.log(venkat1);
