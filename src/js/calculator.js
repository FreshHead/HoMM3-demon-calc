const getDemonsNumber = function (pitlordsNumber, creatureNumber, creatureHealth) {
    const overallHealth = creatureNumber * creatureHealth;
    return Math.min(getDemonsByPitlordsNumber(pitlordsNumber), getDemonsByHealth(overallHealth), creatureNumber);
}

const getDemonsByPitlordsNumber = function (pitlordsNumber) {
    return getDemonsByHealth(50 * pitlordsNumber);
}

const getDemonsByHealth = function (health) {
    return Math.floor(health / 35);
}

const getOptimalNumber = function (...params) {
    const [pitlordsNumber, creatureNumber, creatureHealth, demonNumber] = params;
    if (params.some(param => !Number.isInteger(param))) { // Check parameters just in case.
        console.warn("All parameters must be integers!");
    }
    if (creatureHealth === 0) {
        console.error("Creature health cannot be '0'!");
        return 0;
    }
    const overallHealth = creatureNumber * creatureHealth;
    const optimalNumber = Math.ceil(Math.min(getByPitlordHealth(pitlordsNumber), getOptimalHealth(overallHealth)) / creatureHealth);
    return optimalNumber < demonNumber ? demonNumber : optimalNumber;
}

const getByPitlordHealth = function (pitlordsNumber) {

    // We use getDemonsByPitlordsNumber() and multuply by 35, because we doesn't need leftover hp from pitlords. 
    // Example: 3 pitlords * 50 hp => 150 hp; Math.floor(150 hp / 35 hp) => 4 demons; 4 demons * 35 hp = 140 hp; 140 hp is optimum for making maximum demons from 3 pitlords.

    return getDemonsByPitlordsNumber(pitlordsNumber) * 35;
}

const getOptimalHealth = function (overallHealth) {
    const leftovers = overallHealth % 35;
    return overallHealth - leftovers;
}

export default { getDemonsNumber, getOptimalNumber };
