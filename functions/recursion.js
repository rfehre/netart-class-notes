// function repeat(num, func) {
//     for (let i = 0; i < num; i++) {
//         func(i)
//     }
// }
//
// function sayHi(num) {
//     console.log(`hello for the ${num} time!`)
// }
//
// repeat(10, sayHi)



function startsWithA(string) {
    if(string[0] == "A") {
        return true
    } else {
        return false
    }
}

let z = startsWithA("Anna")
console.log(z)

function hasPrefix(string){
    if(string.indexOf('Mr.')>=0 ||
       string.indexOf('Ms.')>=0 ||
       string.indexOf('Mrs.')>=0 ||
       string.indexOf('Dr.')>=0 ){
        return true
    } else {
        return false
    }
}


let x = hasPrefix("Mr. Anna")
console.log(x)





arr=["Nick","Tina","Anna"]
function filter(arr, func){
    let passed = []
    for (var i = 0; i < arr.length; i++) {
        if(func(arr[i]) ){
            passed.push(arr[i])
        }
    }
    return passed
}

let faculty = ["Nick","Jon","Dr. Englebart","Dr. Poop"]
// let docs = filter(faculty, hasPrefix)
// console.log(docs)







// can create a function inside of variable
let docs = filter(faculty, function(string){
    if(string[0]=="N") return true
    else return false
})

console.log(docs)
