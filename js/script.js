document.addEventListener("DOMContentLoaded", () => {
    const towns = document.querySelectorAll(".town");
    showCreatures("castle");
    towns.forEach(town => town.onclick = (event) => {
        towns.forEach(town => town.classList.remove("selected"));
        event.target.classList.add("selected")
        this.showCreatures(event.target.id);
    });
});
const townCreatures = {
    castle: [10, 10, 25, 35, 40],
    conflux: [3],
    cove: [4, 15, 30, 35],
    dungeon: [5, 6, 14, 22, 25, 30, 50],
    fortress: [6, 14, 15, 20, 35],
    inferno: [4, 13, 25],
    neutral: [1, 4, 10, 20, 15, 30, 35, 15, 40, 50, 30],
    rampart: [8, 10, 20, 15, 30, 55],
    stronghold: [5, 10, 15, 20, 40],
    tower: [4, 25, 30, 40]
};
function showCreatures(town) {
    const creaturesHealths = townCreatures[town];
    const creaturesDiv = document.getElementById("creatures-list");
    creaturesDiv.textContent = ""; // Remove all old children.
    let offset = 0;
    creaturesHealths.forEach((creatureHealth, idx) => {
        // TODO: Сохрани здоровье для расчётов creature[0].health
        const creatureDiv = document.createElement("div");
        creatureDiv.setAttribute("health", creatureHealth);
        creatureDiv.classList.add("creature");
        creatureDiv.onclick = (event) => {
            const creaturesDivs = document.querySelectorAll(".creature");
            creaturesDivs.forEach(creatureDiv => creatureDiv.classList.remove("selected"));
            event.target.classList.add("selected");
            calcResult();
        };
        creatureDiv.style.backgroundImage = "url(img/sprite_sheets/" + town + "_creatures.png)";
        creatureDiv.style.backgroundPositionX = offset + "px";
        creaturesDiv.append(creatureDiv);
        if (idx === 0) {
            creatureDiv.classList.add("selected");
            calcResult();
        }
        offset -= 58;
    });
    // TODO: Попробуй сделать генератор, который возвращает существ по очереди.
}

function numberDown(event) {
    event.target.nextElementSibling.stepDown();
    calcResult();
}

function numberUp(event) {
    event.target.previousElementSibling.stepUp();
    calcResult();
}


function onInput() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
    calcResult();
}

function calcResult() {
    const selectedCreature = document.querySelectorAll(".creature.selected")[0];
    if (selectedCreature) {
        const pitlordsNumber = document.getElementById("pitlord-input").value;
        const creatureHealth = selectedCreature.getAttribute("health");
        const creatureNumber = document.getElementById("creature-input").value;

        const overallHealth = creatureHealth * creatureNumber;

        const resultDiv = document.getElementById("result");
        resultDiv.textContent = getDemonsNumber(pitlordsNumber, overallHealth);

        const optimalDiv = document.getElementById("efficent-result");
        optimalDiv.textContent = getOptimalNumber(pitlordsNumber, overallHealth, creatureHealth);
    }


    function getDemonsNumber(pitlordsNumber, overallHealth) {
        return getSmaller(getDemonsByPitlordsNumber(pitlordsNumber), getDemonsByHealth(overallHealth));
    }

    function getSmaller(first, second) {
        return first < second ? first : second;
    }

    function getDemonsByPitlordsNumber(pitlordsNumber) {
        return getDemonsByHealth(getHealthByPitlords(pitlordsNumber));
    }

    function getHealthByPitlords(pitlordsNumber) {
        return 50 * pitlordsNumber;
    }

    function getDemonsByHealth(health) {
        return Math.floor(health / 35);
    }

    function getOptimalNumber(pitlordsNumber, overallHealth, creatureHealth) {
        return Math.floor(getSmaller(getHealthByPitlords(pitlordsNumber), getOptimalHealth(overallHealth)) / creatureHealth);
    }

    function getOptimalHealth(overallHealth) {
        const leftovers = overallHealth % 35;
        return overallHealth - leftovers;
    }
}