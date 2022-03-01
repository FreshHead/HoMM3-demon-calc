import calc from "./calculator.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".arrow.left")
        .forEach(oDiv => oDiv.addEventListener("click", numberDown));

    document.querySelectorAll(".arrow.right")
        .forEach(oDiv => oDiv.addEventListener("click", numberUp));

    document.querySelectorAll("input.number")
        .forEach(oDiv => oDiv.addEventListener("input", onInput));

    const artifacts = document.querySelectorAll("#artifacts-list .artifact");
    artifacts.forEach(artifact => artifact.addEventListener("click", (event) => {
        event.target.classList.toggle("selected");
        if (event.target.id === "elixir_of_Life") {
            artifacts.forEach(function (artifact) {
                if (artifact.id !== "elixir_of_Life") {
                    artifact.classList.remove("selected");
                }
            });
        } else {
            document.getElementById("elixir_of_Life").classList.remove("selected");
        }
        showResult();
    }));

    const towns = document.querySelectorAll(".town");
    showCreatures("castle");
    towns.forEach(town => town.addEventListener("click", (event) => {
        towns.forEach(town => town.classList.remove("selected"));
        event.target.classList.add("selected");
        showCreatures(event.target.id);
    }));
});
const towns = {
    "castle": [{ hp: 10, cost: 60 }, { hp: 10, cost: 100 }, { hp: 25, cost: 200 }, { hp: 35, cost: 300 }, { hp: 30, cost: 400 }, { hp: 100, cost: 1000 }, { hp: 200, cost: 3000 }],
    "conflux": [{ hp: 3, cost: 25 }, { hp: 150, cost: 1500 }],
    "cove": [{ hp: 4, cost: 35 }, { hp: 15, cost: 110 }, { hp: 15, cost: 225 }, { hp: 30, cost: 275 }, { hp: 35, cost: 515 }, { hp: 80, cost: 1000 }, { hp: 180, cost: 2200 }],
    "dungeon": [{ hp: 5, cost: 50 }, { hp: 6, cost: 65 }, { hp: 14, cost: 130 }, { hp: 22, cost: 250 }, { hp: 25, cost: 300 }, { hp: 30, cost: 330 }, { hp: 50, cost: 500 }, { hp: 80, cost: 850 }, { hp: 180, cost: 2500 }],
    "fortress": [{ hp: 6, cost: 50 }, { hp: 14, cost: 110 }, { hp: 15, cost: 140 }, { hp: 20, cost: 220 }, { hp: 35, cost: 325 }, { hp: 70, cost: 525 }, { hp: 70, cost: 800 }, { hp: 175, cost: 2200 }],
    "inferno": [{ hp: 4, cost: 50 }, { hp: 13, cost: 125 }, { hp: 25, cost: 200 }, { hp: 35, cost: 250 }, { hp: 45, cost: 500 }, { hp: 90, cost: 900 }, { hp: 160, cost: 2700 }],
    "neutral": [{ hp: 1, cost: 0 }, { hp: 4, cost: 0 }, { hp: 10, cost: 100 }, { hp: 20, cost: 100 }, { hp: 15, cost: 150 }, { hp: 30, cost: 200 }, { hp: 15, cost: 400 }, { hp: 35, cost: 300 }, { hp: 40, cost: 500 }, { hp: 50, cost: 600 }, { hp: 30, cost: 750 }],
    "rampart": [{ hp: 8, cost: 70 }, { hp: 10, cost: 90 }, { hp: 20, cost: 120 }, { hp: 15, cost: 200 }, { hp: 30, cost: 250 }, { hp: 55, cost: 350 }, { hp: 90, cost: 850 }, { hp: 180, cost: 2400 }],
    "stronghold": [{ hp: 5, cost: 40 }, { hp: 10, cost: 100 }, { hp: 15, cost: 150 }, { hp: 20, cost: 165 }, { hp: 40, cost: 300 }, { hp: 60, cost: 600 }, { hp: 70, cost: 750 }, { hp: 160, cost: 1500 }],
    "tower": [{ hp: 4, cost: 30 }, { hp: 25, cost: 350 }, { hp: 30, cost: 450 }, { hp: 40, cost: 550 }, { hp: 110, cost: 1100 }, { hp: 150, cost: 2000 }]
};
function showCreatures(town) {
    const townCreatures = towns[town];
    const townNumber = Object.keys(towns).indexOf(town);
    const creaturesDiv = document.getElementById("creatures-list");
    creaturesDiv.textContent = ""; // This removes all previous children.
    let offsetX = 0;
    townCreatures.forEach((creature, idx) => {
        const creatureDiv = document.createElement("div");
        creatureDiv.setAttribute("health", creature.hp);
        creatureDiv.setAttribute("cost", creature.cost);
        creatureDiv.classList.add("creature");
        creatureDiv.addEventListener("click", (event) => {
            for (let creature of creaturesDiv.children) {
                creature.classList.remove("selected");
            }
            event.target.classList.add("selected");
            showResult();
        });
        creatureDiv.style.backgroundImage = "url(img/sprite_sheets/creatures.webp)";
        creatureDiv.style.backgroundPositionX = offsetX + "px";
        creatureDiv.style.backgroundPositionY = townNumber ? -townNumber * 64 + "px" : 0;
        creaturesDiv.append(creatureDiv);
        if (idx === 0) {
            creatureDiv.classList.add("selected");
            showResult();
        }
        offsetX -= 58;
    });
    // TODO: Попробуй сделать генератор, который возвращает существ по очереди.
}

function numberDown(event) {
    event.target.nextElementSibling.stepDown();
    showResult();
}

function numberUp(event) {
    event.target.previousElementSibling.stepUp();
    showResult();
}


function onInput(event) {
    const input = event.target;
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
    showResult();
}

function showResult() {
    const selectedCreature = document.querySelectorAll(".creature.selected")[0];
    if (selectedCreature) {
        const pitlordsNumber = Number(document.getElementById("pitlord-input").value);
        let creatureHealth = Number(selectedCreature.getAttribute("health"));
        const artifacts = document.querySelectorAll("#artifacts-list .artifact.selected");
        artifacts.forEach(artifact => {
            if (artifact.id === "ring_of_Vitality" || artifact.id === "ring_of_Life") {
                creatureHealth += 1;
            } else if (artifact.id === "vial_of_Lifeblood") {
                creatureHealth += 2;
            } else if ("elixir_of_Life") {
                creatureHealth = Math.round(creatureHealth * 1.25);
                creatureHealth += 4;
            }
        })
        const creatureCost = Number(selectedCreature.getAttribute("cost"));
        const creatureNumber = Number(document.getElementById("creature-input").value);



        const resultDiv = document.getElementById("result");
        const demonNumber = calc.getDemonsNumber(pitlordsNumber, creatureNumber, creatureHealth);
        resultDiv.textContent = demonNumber;

        const optimalDiv = document.getElementById("efficent-result");
        const optimalNumber = calc.getOptimalNumber(pitlordsNumber, creatureNumber, creatureHealth, demonNumber);
        optimalDiv.textContent = optimalNumber;

        const costDiv = document.getElementById("cost-result");
        costDiv.textContent = Number(creatureCost * optimalNumber).toLocaleString();
    }

}