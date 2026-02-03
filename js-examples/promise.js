//Also called Async
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('Promise resolved'),
        reject('Promise rejected');},
        2000
    )
});

//Then approach
/*myPromise.then((data) => {
    console.log(data)
});*/

myPromise.then((data) => {
    console.log(data)
}).catch((error)=> {console.log(error)});
