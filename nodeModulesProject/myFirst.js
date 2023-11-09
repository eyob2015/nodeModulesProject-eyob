console.log("My first module")
function myMultiplier(x){
    return x * 2
}

twice = myMultiplier(4)
console.log(`${twice}`)

module.exports.myMultiplier = myMultiplier

console.log(module.exports)