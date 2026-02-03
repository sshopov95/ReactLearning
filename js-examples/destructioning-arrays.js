const persons = [
    {name:"Ivan", job: "React learner ❤️"}, 
    {name:"Pesho", job: "Automechanicar ⚙️"},
    {name:"Gosho", job: "Legacy dev 💻"}
]


//const [fistPerson,secondPerson, thirdPerson] = persons;
const [fistPerson,secondPerson, ...otherNotes] = persons; //rest operator
//console.log(names);
console.log(fistPerson.name);
console.log(fistPerson.job);

console.log(otherNotes); //Тук е array от останалите