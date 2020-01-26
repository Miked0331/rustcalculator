function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}


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
            (thousands_separators(output[0].metal * input)) + ' metal frags <br>' +
            (thousands_separators(output[1].tech * input)) + ' tech trash <br>' +
            (thousands_separators(output[2].sulf * input)) + ' sulfur <br>' +
            (thousands_separators(output[3].cloth * input)) + ' cloth <br>' +
            (thousands_separators(output[4].animal_fat * input)) + ' animal fat <br>' +
            (thousands_separators(output[5].charcoal * input)) + ' charcoal <br>' +
            (thousands_separators(output[6].explosives * input)) + ' explosives <br>' +
            "To make " + c4 * input + " C4!"
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
            (thousands_separators(output2[0].metal * input2)) + " Metal Frags <br>" +
            (thousands_separators(output2[1].pipes * input2)) + " Pipes <br>" +
            (thousands_separators(output2[2].sulfur * input2)) + " Sulfur <br>" +
            (thousands_separators(output2[3].charcoal * input2)) + " Charcoal <br>" +
            (thousands_separators(output2[4].cloth * input2)) + " Cloth <br>" +
            (thousands_separators(output2[5].animal_fat * input2)) + " Animal Fat <br>" +
            "To make " + rockets * input2 + " rocket(s)!"
    }
    else {
        alert("You did not enter a number, try again!")
    }
}

const ammo = 1;

const output3 = [
    { metal: ammo * 10 },
    { sulfur: ammo * 10 },
    { gunPowder: ammo * 20}
]

function myFunction3() {
    var input3 = prompt("How much explosive ammo ?", "Enter Number");
    if (input3 != null) {
        document.getElementById("ammo").innerHTML =
            "You need <br>" +
            (thousands_separators(output3[0].metal * input3)) + " Metal Frags <br>" +
            (thousands_separators(output3[1].sulfur * input3)) + " Sulfur <br>" +
            (thousands_separators(output3[2].gunPowder * input3)) + " Gun Powder <br>" +
            
            "To make " + ammo * input3 + " explosive ammo!"
    }
    else {
        alert("You did not enter a number, try again!")
    }
}

const satchel = 1;

const output4 = [
    { rope: satchel * 1 },
    { bean: satchel * 4 },
    { stash: satchel * 1}
]

function myFunction4() {
    var input4 = prompt("How many satchels ?", "Enter Number");
    if (input4 != null) {
        document.getElementById("satchel").innerHTML =
            "You need <br>" +
            (thousands_separators(output4[0].rope * input4)) + " Rope <br>" +
            (thousands_separators(output4[1].bean * input4)) + " Bean Cans <br>" +
            (thousands_separators(output4[2].stash * input4)) + " Stashes <br>" +
            
            "To make " + satchel * input4 + " satchels!"
    }
    else {
        alert("You did not enter a number, try again!")
    }
}

const gp = 1;

const output5 = [
    { sulfur: gp * 2 },
    { charcoal: gp * 3 },
]

function myFunction5() {
    var input5 = prompt("How many satchels ?", "Enter Number");
    if (input5 != null) {
        document.getElementById("gp").innerHTML =
            "You need <br>" +
            (thousands_separators(output5[0].sulfur * input5)) + " Sulfur <br>" +
            (thousands_separators(output5[1].charcoal * input5)) + " Charcoal <br>" +
            
            "To make " + gp * input5 + " gun powder!"
    }
    else {
        alert("You did not enter a number, try again!")
    }
}