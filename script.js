const c4 = 1;

const output = [
    { metal: c4 * 200 },
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
            "You need <br>" +
            output[0].metal * input + ' metal frags <br>' +
            output[1].tech * input + ' tech trash <br>' +
            output[2].sulf * input + ' sulfur <br>' +
            output[3].cloth * input + ' cloth <br>' +
            output[4].animal_fat * input + ' animal fat <br>' +
            output[5].charcoal * input + ' charcoal <br>' +
            output[6].explosives * input + ' explosives <br>' +
            c4 * input + " C4"
    }
    else {
        alert("You have not entered a number!, try again.")
    }
}

const rockets = 1;

const output2 = [
    { metal: rockets * 100 },
    { pipes: rockets * 2 },
    { sulfur: rockets * 1400 },
    { charcoal: rockets * 1950 },
    { cloth: rockets * 8 },
    { animal_fat: rockets * 24 }
]

function myFunction2() {
    var input2 = prompt("How many rockets do you need to craft?", "Enter Number");
    if (input2 != null) {
        document.getElementById("rockets").innerHTML =
            "You need <br>" +
            output2[0].metal * input2 + " Metal Frags <br>" +
            output2[1].pipes * input2 + " Pipes <br>" +
            output2[2].sulfur * input2 + " Sulfur <br>" +
            output2[3].charcoal * input2 + " Charcoal <br>" +
            output2[4].cloth * input2 + " Cloth <br>" +
            output2[5].animal_fat * input2 + " Animal Fat <br>" +
            "To make " + rockets * input2 + " rocket(s)!"
    }
    else {
        alert("You did not enter a number, try again!")
    }
}
