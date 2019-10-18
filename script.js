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
            "You need " + output[0].metal * input + ' metal frags <br>' +
            "You need " + output[1].tech * input + ' tech trash <br>' +
            "You need " + output[2].sulf * input + ' sulfur <br>' +
            "You need " + output[3].cloth * input + ' cloth <br>' +
            "You need " + output[4].animal_fat * input + ' animal fat <br>' +
            "You need " + output[5].charcoal * input + ' charcoal <br>' +
            "You need " + output[6].explosives * input + ' explosives <br>'
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

const myFunction2 = () => {
    const input = prompt("How many rockets do you need to craft?", "Enter Number");
    if (input != null) {
        document.getElementById("rockets").innerHTML =
            "You need <br>" +
            output2[0].metal
    }
}
