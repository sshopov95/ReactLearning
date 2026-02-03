const person = {
    name: "Ivan ",
    age: 30,
    job: "React learner ❤️",
    //status: `Жив към дата ${Date.now().toString()}`, //`` дава опция за инжект на променливи - Date.now() връща timestamp спрямо 1970
   status: `Жив към дата ${new Date().toLocaleDateString()}`,
   address: { city: "Varna", country:"Bulgaria"}
    //date: new Date().toLocaleDateString()
}
//const { job } = person; //взима се точното име от обекта
//console.log(job);

//const { job, status } = person; //взимат се точните имена от обекта
//console.log(job);
//console.log(status);

//const { job: position, status } = person; //преименуване на пропъртитата - отляво проп отдясно името
//console.log(position);
//console.log(status);

//React example - not working here 
/*
function PrintCard ({ job}){
    console.log(job);
}
PrintCard(position);*/

const { job: position, status, address: { city, country} } = person; //Изважда пропъртита като firstlevel от nested array-я 
console.log(city, country);