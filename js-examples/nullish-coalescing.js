let value = null;
let result = value ?? 'Default Value'; //Връща дясната част когато лявата е или null или undefined

console.log(result);


let value2 = 0;
let result2 = value2 ?? 'Default Value'; //Връща дясната част когато лявата е или null или undefined

console.log(result2);


let value3 = 1;
let result3 = value3 || 'Default Value'; //Връща дясната част когато лявата е EMPTY() - 0,'',null,undefined,false etc

console.log(result3);