// der er 3 javascript keywords der bruges til tildeling af variable

const a = 5 // dette er en konstant, den ændre sig ikke.
console.log(a)

let b = 6
b = "hej"

function testScope(){
    let a1= "jeg er lokal"
    var v1 = "jeg var lokal"
    if(a1>v1){
        let a2 = "a1 var større end v1"
        console.log(a2)
    }
    if(3==3){
        let a3 = 3
        var v3 =3.3
        console.log("3=3")
    }
    //console.log(a3) kan ikke ses her
    console.log(v3) //block scope virker ikke med var
}

testScope()
//console.log(a2) scope virker
//console.dog(v1) scope virker