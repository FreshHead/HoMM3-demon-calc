function getCreatures(town) {
    const creatures = {
        castle: [
            [{ name: "pikeman", health: 10 }, { name: "halberdier", health: 10 }],
            [{ name: "archer", health: 10 }, { name: "marksman", health: 10 }],
            [{ name: "griffin", health: 25 }, { name: "royal_griffin", health: 25 }],
            [{ name: "swordsman", health: 35 }, { name: "crusader", health: 35 }],
            [{ name: "monk", health: 30 }, { name: "zealot", health: 30 }],
            [{ name: "cavalier", health: 100 }, { name: "champion", health: 100 }],
            [{ name: "angel", health: 200 }, { name: "archangel", health: 250 }]
        ],
        conflux: [
            [{ name: "pixie", health: 3 }, { name: "sprite", health: 3 }]
            // No need to list elementals, because you cannot demonize them.            
        ],
    }

    return creatures[town];
}