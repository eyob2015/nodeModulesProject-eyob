console.log("My Second module")
function myMultiplier(x){
    return x * 3
}


result = myMultiplier(4)
console.log(`${result}`)

module.exports.myMultiplier = myMultiplier

console.log(module.exports)