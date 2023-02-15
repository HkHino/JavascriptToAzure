// der er 7 (3+2+2) primitive typer i javascript

//der er yderligere 2 typer
// objekct og function

function showTypes(lst) {
    console.log("STARTER udskrivning")
    for (const obj of lst) {
        console.log(obj + " er af typen = " + typeof obj)
    }
}

const a = 5.5
const arr = []
arr.push(a)         //push betyder tilføj det her element til arrayet
arr.push(0/0)
showTypes(arr)
console.log(arr[0])
console.log(arr[1])