//Mutable 
const movies = ["Movie1", "Movie2"]
movies.push("Movie3"); //Add another - direct mutation (not cool for react ! - state change might not work)
console.log(movies);

//Immutable 

const serials = ["Serial1", "Serial2"]
const newSerails = [...serials];            //Copy(spread)
const newSerails2 = [...serials, "Serial3"];  //Copy(spread) and push
console.log(newSerails2);


//Changing values while mapping
const changedSerials = serials.map((serial)=> serial === 'Serial2'? 'Serial3-changed' : serial);  //Copy(spread) and push
console.log(serials);
console.log(changedSerials);

//object

const person = {
    name:"Ivan",
    job: "React learner ❤️"
}

const newPerson = { ...person, job:  "React user"}
//newPerson.job = "React user";
console.log(person);
console.log(newPerson);