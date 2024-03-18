const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : ()=> {
      return document.write(firstName+lastName);
    }
  };
  console.log(person);