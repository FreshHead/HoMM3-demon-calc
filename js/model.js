function getCreatures(town) {
    const creatures = {
        castle: [
            [{ name: "pikeman", health: 10 }],
            [{ name: "archer", health: 10 }],
            [{ name: "griffin", health: 25 }],
            [{ name: "swordsman", health: 35 }],
            [{ name: "monk", health: 30 }],
        ],
        conflux: [
            [{ name: "pixie", health: 3 }, { name: "sprite", health: 3 }]
            // No need to list elementals, because you cannot demonize them.            
        ],
    }

    return creatures[town];
}