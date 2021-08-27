let testosterone = 0

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


function buyWeights() {
    if (testosterone >= 10) {
        clickUpgrades.weights.quantity += 1
        testosterone -= clickUpgrades.weights.price

        draw()

    }
}

function buyGfuel() {
    if (testosterone >= 40) {
        clickUpgrades.gfuel.quantity += 1
        testosterone -= clickUpgrades.gfuel.price

        draw()

    }
}

function draw() {

    document.getElementById("t-level").innerText = testosterone

    document.getElementById("weights").innerText = "Weights : " + clickUpgrades.weights.quantity

    document.getElementById("gfuel").innerText = "G-fuel : " + clickUpgrades.gfuel.quantity

}