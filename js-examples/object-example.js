const Person = {
    name: "Ivan ",
    age: 30,
    job: "React learner ❤️",
    //status: `Жив към дата ${Date.now().toString()}`, //`` дава опция за инжект на променливи - Date.now() връща timestamp спрямо 1970
   status: `Жив към дата ${new Date().toLocaleDateString()}`
    //date: new Date().toLocaleDateString()
}

console.log(Person) //Output всичките полета
//console.log(Person.age) //Output единично - Duh
//console.log(Person.status)