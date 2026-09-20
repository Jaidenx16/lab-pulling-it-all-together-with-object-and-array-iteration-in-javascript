function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}









function playerStats(playerName) {
    const game = gameObject();

    // A for...in loop visits each key in an object: here, home and away.
    for (const side in game) {
        const players = game[side].players;

        for (const name in players) {
            if (name === playerName) {
                // Brackets let us use a variable to look up an object's value.
                return players[name];
            }
        }
    }

    // No matching player was found.
    return undefined;
}





function numPointsScored(playerName) {
    const stats = playerStats(playerName);

    if (stats !== undefined) {
        return stats.points;
    }

    return undefined;
}





function shoeSize(playerName) {
    const stats = playerStats(playerName);

    if (stats !== undefined) {
        return stats.shoe;
    }

    return undefined;
}

function teamColors(teamName) {
    const game = gameObject();

    for (const side in game) {
        const team = game[side];

        if (team.teamName === teamName) {
            return team.colors;
        }
    }

    return undefined;
}

function teamNames() {
    const game = gameObject();
    const names = [];

    for (const side in game) {
        // push adds a value to the end of an array.
        names.push(game[side].teamName);
    }

    return names;
}

   function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];

    for (const side in game) {
        const team = game[side];

        if (team.teamName === teamName) {
            for (const name in team.players) {
                numbers.push(team.players[name].number);
            }
        }
    }

    // This stays empty if the team was not found.
    return numbers;
}

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let rebounds;

    for (const side in game) {
        const players = game[side].players;

     for (const name in players) {
             const stats = players[name];

            // Keep the rebounds belonging to the biggest shoe seen so far.
                 if (stats.shoe > biggestShoe) {
                     biggestShoe = stats.shoe;
                       rebounds = stats.rebounds;
            }
        }
    }

    return rebounds;
}
