const getDemonsNumber = function (pitlordsNumber, creatureNumber, creatureHealth) {
    const overallHealth = creatureNumber * creatureHealth;
    return getSmaller(getDemonsByPitlordsNumber(pitlordsNumber), getDemonsByHealth(overallHealth), creatureNumber);
}

const getSmaller = function (...numbers) {
    // TODO: Используй Math.min()
    return numbers.reduce((prev, cur) => prev > cur ? cur : prev);
}

const getDemonsByPitlordsNumber = function (pitlordsNumber) {
    return getDemonsByHealth(50 * pitlordsNumber);
}

const getDemonsByHealth = function (health) {
    return Math.floor(health / 35);
}

const getOptimalNumber = function (pitlordsNumber, creatureNumber, creatureHealth, demonNumber) {
    const overallHealth = creatureNumber * creatureHealth;
    const optimalNumber = Math.floor(getSmaller(getByPitlordHealth(pitlordsNumber), getOptimalHealth(overallHealth)) / creatureHealth);
    return optimalNumber < demonNumber ? demonNumber : optimalNumber;
}

const getByPitlordHealth = function (pitlordsNumber) {

    // We use getDemonsByPitlordsNumber(), because we doesn't need leftover hp. 
    // Example: 3 pitlords * 50 hp => 150 hp; Math.floor(150 hp / 35 hp) => 4 demons; 4 demons * 35 hp = 140 hp; 140 hp is optimum for making maximum demons from 3 pitlords.

    return getDemonsByPitlordsNumber(pitlordsNumber) * 35;
}

const getOptimalHealth = function (overallHealth) {
    const leftovers = overallHealth % 35;
    return overallHealth - leftovers;
}

export default Object.create({ getDemonsNumber: getDemonsNumber, getOptimalNumber: getOptimalNumber });
