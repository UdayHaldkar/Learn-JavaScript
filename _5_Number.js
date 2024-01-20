const score  =40
console.log(typeof score)


// declare as object
const balance = new Number(500)
console.log(balance)

//convert number into string to use string function

console.log(balance.toString())

console.log(balance.toString().length)


//for precision values
console.log(balance.toFixed(2))

//priority before the decimals
console.log(balance.toPrecision(2))

//local standars for easy readibility

const money = 10000000
console.log(money.toLocaleString()) // usa standards
console.log(money.toLocaleString('en-IN')) // indian standards 
