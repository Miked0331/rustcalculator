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
            "You need " + output[0].metal * input + ' metal frags <br>' + output[0].img +
            "You need " + output[1].tech * input + ' tech trash <br>' +
            "You need " + output[2].sulf * input + ' sulfur <br>' +
            "You need " + output[3].cloth * input + ' cloth <br>' +
            "You need " + output[4].animal_fat * input + ' animal fat <br>' +
            "You need " + output[5].charcoal * input + ' charcoal <br>' +
            "You need " + output[6].explosives * input + ' explosives <br>'
    }
}

const rockets = 1;

const output2 = [
    { metal: rockets * 100 },
    { pipes: rockets * 2 },
    {}
]
