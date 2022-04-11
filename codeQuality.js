// level {1/2/3}

// ## Level 1

// Re-write the below code to better code quality standards.


// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }


const GET_daTA = async () =>{
    var response = {};
    let error = false;
    try{
        response  = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    }catch(err){
        error = true;
        console.warn(err);
    }
}