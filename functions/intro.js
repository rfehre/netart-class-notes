
// function replaceAll(string, char, rep){
//     if(string.indexOf(char) < 0){
//         return string
//     } else {
//         string = string.replace(char, rep)
//         return replaceAll(string, char, rep)
//         //have to add 'return' to the beginning of line 9 to make this version work as it is always expecting a value in recursive statements, by design. just because you call a function doesn't mean you exit the function that it's in.
//     }
// }

// let newName = replaceAll("nick briz", "i", "o")
// console.log(newName)


function replaceAll(string, char, rep){
    if(string.indexOf(char) < 0){
        return string
    } else {
        string = string.replace(char, rep)
        if (string.indexOf(char) >= 0){
            return replaceAll(string, char, rep)
        } else {
            return string
        }
    }
}

let newName = replaceAll("nick briz", "i", "o")
console.log(newName)


// higher order function
