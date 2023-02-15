console.log("Jeg er i setbackgroundcolour")

const inp = document.querySelector(".inpColour")
console.log(inp)

const pbCol = document.querySelector(".pbSetColour")
console.log(pbCol)

const colpicker = document.querySelector(".colpicker")
console.log(colpicker)
function setBackGrColour(e){
    console.log(e)
    //console.log(e.key)
    const bdy = document.querySelector("body");
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col;


}

function setBackgroundcolourPicker(e)
{
    const bdy = document.querySelector("body");
    let col = colpicker.value
    console.log(col)
    bdy.style.backgroundColor = col;

}
pbCol.addEventListener('click', setBackGrColour)
pbCol.addEventListener('keyup',setBackGrColour)
colpicker.addEventListener('input', setBackgroundcolourPicker)