const num =[1,2,34,54]

// num.forEach(function(i){
//     console.log(i)
// })

num.forEach((i)=>{
    console.log(i);
})

//by pre defined function

function printme(i) {
    console.log(i);
    
}

num.forEach(printme)


// for each loop brings more data with it like index and whole arrays

num.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})