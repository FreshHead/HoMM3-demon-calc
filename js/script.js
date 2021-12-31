

document.addEventListener("DOMContentLoaded", () => {
    let fractionSelect = document.getElementById("fractions")
    let creatureSelect = document.getElementById("creatures")
    fractionSelect.onchange = (evt) => {
        let selectedFraction = evt.srcElement.selectedOptions[0].value
        for (let i = creatureSelect.options.length; i >= 0; i--) {
            creatureSelect.remove(i)
        }
        creatures[selectedFraction].forEach(creature => {
            let option = document.createElement('option')
            option.text = creature.name
            creatureSelect.add(option)
        })
        calcResult()
    }

    creatureSelect.onchange = (evt) => calcResult()

    let countInput = document.getElementById("count")
    let pitlordInput = document.getElementById("pitlords")
    let resultText = document.getElementById("result")

    pitlordInput.onchange = (evt) => calcResult()
    countInput.onchange = (evt) => calcResult()

    function calcResult() {
        let health = Object.values(creatures)[fractionSelect.selectedIndex][creatureSelect.selectedIndex].health
        let count = countInput.value
        let pitlords = pitlordInput.value
        let demonsByPitlords = Math.floor((50 * pitlords) / 35)
        let demonsByHp = Math.floor(health * count / 35)
        let demons = demonsByPitlords > demonsByHp ? demonsByHp : demonsByPitlords
        resultText.value = demons + " демонов";
    }
})

