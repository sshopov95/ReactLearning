const user = {
    name:'Ivan'
}

//console.log(user.address); //Тук връща undefined - но не и exception!
//console.log(user.address.city); //Тук хвърля exception заради address = undefinied!

console.log(user.address?.city); //Optional chaining - a.k.a. nullable c# - връща само първото поле когато е undefined