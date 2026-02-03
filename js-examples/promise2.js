/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((data) => console.log(data)) //Specific to fecth api
.catch((error)=> console.log(error)); 
*/

//Sync await
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();  
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
};
fetchData();