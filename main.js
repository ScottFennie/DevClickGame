let testosterone = 0
let tsec = 1
let multiply = 0

let clickUpgrades = {
    weights: {
        price: 10,
        quantity: 0,
        multiplier: 1,
    },
    gfuel: {
        price: 40,
        quantity: 0,
        multiplier: 2,
    }
}

let autoUpgrades = {
    supplements: {
        price: 20,
        quantity: 0,
        multiplier: 10,
    },
    codelessons: {
        price: 30,
        quantity: 0,
        multiplier: 20,
    }
}

function mine() {

    testosterone++

    for (let key in clickUpgrades) {
        let item = clickUpgrades[key]

        testosterone += (item.quantity * item.multiplier)

    }

    draw()
}

function addAuto() {

    for (let key in autoUpgrades) {
        let item = autoUpgrades[key]

        testosterone += (item.quantity * item.multiplier)
        draw()
    }
}

function Multiplier() {

    multiply += autoUpgrades.supplements.multiplier
}

function Multiplier2() {

    multiply += autoUpgrades.codelessons.multiplier
}

function Tsec() {

    tsec += clickUpgrades.weights.multiplier
}

function Tsec2() {

    tsec += clickUpgrades.gfuel.multiplier
}



function buyWeights() {
    if (testosterone >= clickUpgrades.weights.price) {
        clickUpgrades.weights.quantity += 1
        testosterone -= clickUpgrades.weights.price
        clickUpgrades.weights.price *= 2

        Tsec()
        draw()

    }
}

function buyGfuel() {
    if (testosterone >= clickUpgrades.gfuel.price) {
        clickUpgrades.gfuel.quantity += 1
        testosterone -= clickUpgrades.gfuel.price
        clickUpgrades.gfuel.price *= 2

        Tsec2()
        draw()

    }
}

function buySupplements() {
    if (testosterone >= autoUpgrades.supplements.price) {
        autoUpgrades.supplements.quantity += 1
        testosterone -= autoUpgrades.supplements.price
        autoUpgrades.supplements.price *= 2


        Multiplier()
        draw()

    }

}

function buyCodeLessons() {
    if (testosterone >= autoUpgrades.codelessons.price) {
        autoUpgrades.codelessons.quantity += 1
        testosterone -= autoUpgrades.codelessons.price
        autoUpgrades.codelessons.price *= 2


        Multiplier2()
        draw()

    }

}

function draw() {

    document.getElementById("t-level").innerText = testosterone

    document.getElementById("weights").innerText = "W : " + clickUpgrades.weights.quantity

    document.getElementById("gfuel").innerText = "G : " + clickUpgrades.gfuel.quantity

    document.getElementById("supplements").innerText = "S : " + autoUpgrades.supplements.quantity

    document.getElementById("codelessons").innerText = "CL : " + autoUpgrades.codelessons.quantity

    document.getElementById("t-sec").innerText = "T/(3)Sec : " + multiply

    document.getElementById("multiplier").innerText = "T/Click : " + tsec

    drawButtons()

}

function drawButtons() {
    document.getElementById("buy-weights").innerText = "T - " + clickUpgrades.weights.price

    document.getElementById("buy-gfuel").innerText = "T - " + clickUpgrades.gfuel.price

    document.getElementById("buy-supplements").innerText = "T - " + autoUpgrades.supplements.price

    document.getElementById("buy-code").innerText = "T - " + autoUpgrades.codelessons.price
}

drawButtons()
setInterval(addAuto, 3000);