let testosterone = 0

let clickUpgrades = {
    weights: {
        price: 10,
        quantity: 0,
        multiplier: 1,
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

    testosterone += 1
    draw()

}

function buyWeights() {
    if (testosterone >= 10) {
        clickUpgrades.weights.quantity += 1
        console.log(clickUpgrades.weights.quantity)
    }
}

function draw() {

    document.getElementById("t-level").innerText = testosterone

}