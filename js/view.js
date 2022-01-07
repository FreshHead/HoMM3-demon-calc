document.addEventListener("DOMContentLoaded", () => {
    const towns = document.querySelectorAll(".town");
    showCreatures("castle");
    towns.forEach(town => town.onclick = (event) => {
        towns.forEach(town => town.classList.remove("townSelection"));
        event.target.classList.add("townSelection")
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
    const creatures = townCreatures[town];
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
    });
    // TODO: Попробуй сделать генератор, который возвращает существ по очереди.
}
