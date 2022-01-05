document.addEventListener("DOMContentLoaded", () => {
    const towns = document.querySelectorAll(".town");
    showCreatures("castle");
    towns.forEach(town => town.onclick = (event) => {
        towns.forEach(town => town.classList.remove("townSelection"));
        event.target.classList.add("townSelection")
        this.showCreatures(event.target.id);
    });
});

function showCreatures(town) {
    const creatures = getCreatures(town);
    const creaturesDiv = document.getElementById("creatureList");
    creaturesDiv.textContent = ""; // Remove all old children.
    let offset = 0;
    creatures.forEach(creature => {
        // TODO: Сохрани здоровье для расчётов creature[0].health
        const creatureDiv = document.createElement("div");
        creatureDiv.style.backgroundImage = "url(img/sprite_sheets/" + town + "_creatures.png)";
        creatureDiv.style.backgroundPositionX = offset + "px";
        creaturesDiv.append(creatureDiv);
        offset -= 58;
        if (creature[1]) {
            const upgradedCreatureDiv = document.createElement("div");
            upgradedCreatureDiv.style.backgroundImage = "url(img/sprite_sheets/)" + town + "_creatures.png)";
            creaturesDiv.append(upgradedCreatureDiv);
            offset += 58;
        }
    });
    // TODO: Попробуй сделать генератор, который возвращает существ по очереди.
}
