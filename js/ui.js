document.addEventListener("DOMContentLoaded", () => {
    const towns = document.querySelectorAll(".towns div");
    towns.forEach(town => town.onclick = (event) => {
        towns.forEach(town => town.classList.remove("townSelection"));
        event.target.classList.add("townSelection")
    });
});