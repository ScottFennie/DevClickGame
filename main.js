let testosterone = 0
let tsec = 0
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
        multiplier: 4,
    }
}

let autoUpgrades = {
    supplements: {
        price: 30,
        quantity: 0,
        multiplier: 20,
    },
    codelessons: {
        price: 100,
        quantity: 0,
        multiplier: 50,
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

    for (let key in autoUpgrades) {
        let item = autoUpgrades[key]

        multiply += (item.quantity * item.multiplier)
    }
}


function Tsec() {

    for (let key in clickUpgrades) {
        let item = clickUpgrades[key]

        tsec = (item.quantity * item.multiplier)

    }

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

        Tsec()
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


        Multiplier()
        draw()

    }

}

function draw() {

    document.getElementById("t-level").innerText = testosterone

    document.getElementById("weights").innerText = "Weights : " + clickUpgrades.weights.quantity

    document.getElementById("gfuel").innerText = "G-fuel : " + clickUpgrades.gfuel.quantity

    document.getElementById("t-sec").innerText = "T/Sec : " + multiply

    document.getElementById("multiplier").innerText = "T-Multiplier : " + tsec

    drawButtons()

}

function drawButtons() {
    document.getElementById("buy-weights").innerText = "Buy Weights: $" + clickUpgrades.weights.price

    document.getElementById("buy-gfuel").innerText = "Buy G-fuel: $" + clickUpgrades.gfuel.price

    document.getElementById("buy-supplements").innerText = "Buy Supplements: $" + autoUpgrades.supplements.price

    document.getElementById("buy-code").innerText = "Buy Code Lessons: $" + autoUpgrades.codelessons.price
}

drawButtons()
setInterval(addAuto, 3000);