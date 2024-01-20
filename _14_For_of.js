let arr=[2,3,12,4,52,5,3]

for(const i of arr){
    console.log(i)
}


console.log("strings")
let greet ="Hello world"
for(const i of greet){
    console.log(i)
}

//Maps
console.log("Maps")

const m= new Map()

m.set('In','India')
m.set('usa','United States')
m.set('fr','france')

console.log(m)

for(const [i,j] of m){
    console.log(i," and ",j)
}