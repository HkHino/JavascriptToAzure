const fruits =["æbler", "pærer", "bannaner", "juice"]
function myFunc1(item){
    const ptag = document.getElementById("demo")
    console.log(ptag)
    ptag.innerHTML += item + "<br/>"
}
function myFunc2(item, index){
    const ptag = document.getElementById(("demo"))
    ptag.innerHTML += "<br>" + index + ":" + item
}

//fruits.forEach(myFunc1)
fruits.forEach(myFunc2)




/*
let a = 5
a += 10
console.log(a) dette vil udskrive 15

 */