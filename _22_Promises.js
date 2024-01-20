
// declare with variable
const promiseone = new Promise(function (resolve, reject) { //promise is declared
    setTimeout(function () {
        resolve()                                           // resolve is connected to then()
        console.log("Async task is completed");
    }, 1000);
})

promiseone.then(function () {                            // then consumed the promise
    console.log("Promise ids consumed");
})


//---------------------------------------------------------------------------------


//Direct declaration

new Promise(function (resolve, reject) { //promise is declared
    setTimeout(function () {
        // resolve is connected to then()
        resolve()
        console.log("Async task 2 is completed");
    }, 1000);
}).then(function () {
    console.log("Promise 2 completed");
})

//passing parameter through resolve

new Promise(function (resolve, reject) {
    setTimeout(function () {

        //passing parameter as an object (also an pass as array ,etc) 
        resolve({ username: "uday", email: "udayyy@ghaja.com" })

    }, 1000);
}).then(function (user) {         //resolve argument as "user"
    console.log(user);
})


//use of reject and .then() ,.catch(), chaning{ .then().then().catch()}

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function(){
    let error = false
    if (!error) {
        resolve({ username: "uday", email: "udy@ghaja.com" })
    }
    else {
        reject('Error: Soething went wrong')
    }
},1000)

})


//channing
promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((myusername) => {
    console.log(myusername);
})
.catch(function (err) {
    console.log(err);
})
.finally(()=>console.log("the promise is either resolve or rejected"))



//------------------------------------------------------------------------------------------

//by async and await

// in async it doesn't require catch(), if error occur or code it not complied in given particular time it gives you a error 

// async function consumepromisefour(){
//     const response = await promisefour
//     console.log(response);
// }

//or

async function consumepromisefour(){
 
    try{
    const response = await promisefour
    console.log(response);
    }
    catch{
        console.log(err);
    }
}



consumepromisefour()


//real world uses

async function getUserDeatils(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //console.log(response);

        const data = await response.json()
        console.log(data);
        
    }

    catch{
        console.log("E: ",err);
    }
}

getUserDeatils()



