/*let user = {
    name: "Endri",
    age: 18,
    email: "endri18@gmail.com",
    gender: "male",
    location: "Tirane",
    login: function() {
        console.log("User just logged in");
    },
    logout: function() {
        console.log("User just logged out");
    },
    blog:["mosha", "ideale", "30"],
    log: function() {
        this.blog
    },
}


user['email']="bega15@gmail.com"
user.age = 15
user.skill="none"
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user['email'])
console.log(user.skill)
user.login()
user.logout()
console.log(user.log()) 

let calculator = {
    addition: function(x, y) {
        return x + y
    },
    subtraction: function(x, y) {
        return x - y
    },
    multiplication: function(x, y) {
        return x * y
    },
    division: function(x, y) {
        return x / y
    },
    remainder: function(x, y) {
        return x % y
    },
}

console.log(calculator.addition(5,6))
console.log(calculator.subtraction(5,6))
console.log(calculator.multiplication(5,6))
console.log(calculator.division(5,6))
console.log(calculator.remainder(3,2)) */

let fruits = {
   apple: "red",
   banana: "yellow",
   cherry: "red",
}

let keys = Object.keys(fruits)

for (let i = 0; i < keys.length; i++) {
   let names = keys[i]
   console.log(names, fruits[names])
}
