const user = { name: "username1", isLoggedIn: false}

function showHello(){
    return user.isLoggedIn && 'Wellcome '
    //Когато отляво е true - връща дясната част. Ако е false/null etc - връща лявата част
}

user.isLoggedIn = true;
console.log(showHello());

user.isLoggedIn = false;
console.log(showHello());