// to change the exsisting properties of an object

//first we have to know the properties

//we try to change the value of piin (Math.PI)

console.log(Math.PI);
Math.PI= 5;  
console.log(Math.PI);

//using descripter properties

let description = Object.getOwnPropertyDescriptor(Math, "PI")

//writable is false
console.log(description);

 // change poperies

 Object.defineProperty(Math,'PI',{
    writable :true
    // enumerable: true,
    // configurable: true
    
    
 })