function out(s) {console.log(s)}

let a = 5 ; let b = 6
console.log(a)

console.log("hej" + 5) //js opfatter dette som en konkastination

console.log("hej" -5) // dette giver en NaN, altså kan den ikke funde ud af det. Dette sker i runtime

out("jeg er i out" + 4>"5")
out("jeg er i out " + (6>5))

const c = "hej"
const d = 5
let f
let g = null


if(c>d)out("c større end d")
if (c) out("c er noget")
out(f)
out(g)

let arr = [5, 5.5, "hej", 5>4, f,g, [1, "array2"], {"erik" : 5}, 0/0]

arr.forEach(out)
arr.forEach(s => console.log(s)) //præcis den samme sæstning som ovenover. her kalder vi bare ikke vores out funktion

