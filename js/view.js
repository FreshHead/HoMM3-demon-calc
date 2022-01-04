document.addEventListener("DOMContentLoaded", () => {
    const towns = document.querySelectorAll(".towns div");
    towns.forEach(town => town.onclick = (event) => {
        towns.forEach(town => town.classList.remove("townSelection"));
        event.target.classList.add("townSelection")
        this.showCreatures(event.target.id);
    });
});

function showCreatures(town) {
    const townCreatures = getCreatures(town);
    // TODO: Попробуй сделать генератор, который возвращает существ по очереди.
    const levels = document.querySelectorAll(".creatures .creature");
    townCreatures.forEach((oCreature, idx)=> {

    });
    levels.forEach((level, idx) => {
        if (townCreatures[idx]) {
            level.children[0].style.background = "url(img/creatures/" + town + "/" + townCreatures[idx][0].name + ".gif)" + "no-repeat";
            level.children[1].style.background = "url(img/creatures/" + town + "/" + townCreatures[idx][1].name + ".gif)" + "no-repeat";
        } else {
            level.children[0].style.background = "";
            level.children[1].style.background = "";
        }
    });
}
