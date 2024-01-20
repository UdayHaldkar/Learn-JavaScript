//symbol
const mysym = Symbol("Key1")


//object
const jsuser = {
    name: "Uday",
    age: 22,
    loc: "jbp",
    [mysym]: "mykey1",

}

console.log(jsuser.age)

console.log(jsuser["name"])
console.log(jsuser[mysym])


jsuser.age = 23

console.log(jsuser.age)

// Object.freeze(jsuser)
jsuser.age = 25

console.log(jsuser.age)



//function

jsuser.greeting = function () {
    console.log("Hello User");
}

jsuser.greetingtwo = function () {
    console.log(`hello user, ${this.name}`);
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

const {name:n}=jsuser
console.log(n)

