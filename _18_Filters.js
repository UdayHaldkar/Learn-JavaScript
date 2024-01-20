const mynums =[1,2,34,2,4,2,5,23,54,4]

let newnums= mynums.filter((i)=>i>4)
console.log(newnums);

//or when we use {}


newnums= mynums.filter((i)=>{return i>4})
console.log(newnums);