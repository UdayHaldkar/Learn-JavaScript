// for in work in objects and arrays
//for in not work inmaps

let myobj ={
    name:"uday",
    age:22,
    prof:"student"
}
// i is key myobj[i] is value
for(const i in myobj){
    console.log(`${i} is Key and ${myobj[i]} is a value`)
}