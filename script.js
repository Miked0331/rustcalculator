const c4 = 1;

const output = [
    { metal: + c4 * 200 },
    { tech: c4 * 2 },
    { sulf: c4 * 2200 },
    { cloth: c4 * 20 },
    { animal_fat: c4 * 45 },
    { charcoal: c4 * 3000 },
    { explosives: c4 * 20 }
]


function myFunction() {
    var input = prompt("Please enter a number", "Enter a Number");
    if (input != null) {
        document.getElementById("c4").innerHTML =
            "You need " + output[0].metal * input + ' metal frags <br>' +
            "You need " + output[1].tech * input + ' tech trash <br>' +
            "You need " + output[2].sulf * input + ' sulfur <br>' +
            "You need " + output[3].cloth * input + ' cloth <br>' +
            "You need " + output[4].animal_fat * input + ' animal fat <br>' +
            "You need " + output[5].charcoal * input + ' charcoal <br>' +
            "You need " + output[6].explosives * input + ' explosives <br>'
    }
}



function final() {
    //  prompt("How much c4 will do u need to make?")
    document.write(output.metal + "  metal frags <br>")
    document.write(output.animal_fat + " Animal fat <br> ")
    document.write(output.tech + " Tech Trash <br> ")
    document.write(output.sulf + " Sulfur <br> ")
    document.write(output.cloth + " Cloth <br> ")
    document.write(output.charcoal + " Charcoal <br> ")
    document.write(output.explosives + " Explosives <br>")
}



/*const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = output.map(sweetItem => {
    document.write(sweetItem)
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]  */