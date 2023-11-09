//Questions solved on Node Modules

const {readfileSync,writeFileSync, readFileSync} = require('fs')

multiply_by_two = require('./myFirst')
multiply_by_three = require('./mySecond')

let x = 5

result_one = multiply_by_two.myMultiplier(x)
result_two = multiply_by_three.myMultiplier(x)

console.log(`${x} * 2 = ${result_one}`)
console.log(`${x} * 3 = ${result_two}`)

/* 4. While you are in your "myCollector" module:
a. Write a script inside of your "myCollector" module that passes the number 14 to
your "myMultiplier" function that you imported from "myFirst" module and
writes the returned value on a file called "results.txt". The result you write on the
file should read like this: "The value of 14 when passed through the myMultiplier
function is ( )." */

let val = 14

script_fs_save = multiply_by_two.myMultiplier(val)
script_fs_save02= multiply_by_three.myMultiplier(val)

data_one = `The value of 14 when passed through the myMultiplier
function is ${script_fs_save}.`

data_two = `The value of 14 when passed through the myMultiplier
function is ${script_fs_save02}.`

var first_write = writeFileSync('./results.txt',`${data_one}\n`,{flag:'a'})
var second_write = writeFileSync('./results.txt',`${data_two}`,{flag:'a'})
var read_data_fromtxt = readFileSync('./results.txt','utf8')
console.log(read_data_fromtxt)

