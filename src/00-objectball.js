function gameObject() { 
    const obj = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players:{
        "Alan Anderson" :{
            number: 0,
            shoe: 16,
            points:22,
            rebounds: 12,
            assists:12,
            steals: 3,
            blocks: 1,
            slamdunks: 1,
        },
        "Bismak Biyombo": {  
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamdunks: 10,
        },
         "Desagna Diop" : {   
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamdunks: 5,
        },
         "Ben Gordon": {
            number: 8,
            shoe: 15, 
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamdunks: 0, 
        },
            "Brendan Haywood" : {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamdunks: 12,    
            }
        },
    },  
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien" : {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists:1,
            steals: 2,
            blocks: 7,
            slamdunks: 2,
        },
            "Bismak Biyombo" : { 
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamdunks: 10,   
        },
           "Desagna Diop" : {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamdunks: 5,   
        },
           "Ben Gordon" : {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamdunks: 0,   
        },
          "Brendan Haywood" : {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamdunks: 12,   
        }

    }
    }
    }
    return obj;
}

function numPointsScored(name) {
    if (gameObject()["home"]["players"][name]) {
        return (gameObject()["home"]["players"][name]["points"])
    } else {
        return (gameObj()["away"]["players"][name]["points"])
    }
}

function shoeSize(name) {
    if (gameObject()["home"]["players"][name]) {
        return (gameObject()["home"]["players"][name]["shoe"])
    } else {
        return (gameObject()["away"]["players"][name]["shoe"])
    }
}

function teamColors(name) {
   if (name = "home") {
    return gameObject().home.colors;
   } else {
    return gameObject().away.colors;
   }
};

function teamNames(gameObjects) {
    let names = [];
    names.push(gameObject().home.teamName, gameObject().away.teamName)
    return names;
}

function homeName() {
    return gameObject().home.teamName;
}

function awayName() {
    return gameObject().away.teamName;
}


function home() {
    return gameObject().home.players;
}

function away() {
    return gameObject().away.plyers;
}

function homeNumbers() {
    return (Object.values(home())).map(num => num.number)
}

function awayNumbers() {
    return (Object.values(away())).map(num => num.number)
}

function playerNumbers(name) {
    if (name = homeName) {
        return (homeNumbers())
    } else {
        return (awayNumbers())
    }
}

function allPlayers() {
    return Object.assign({}, home(), away());
}


function playerStats(name) {
     return (allPlayers()[name])
}

function bigShoeRebounds() {
    number = (Object.values(allPlayers())).map(size => size.shoe);
    biggestShoe = number.reduce((a, c) => Math.max(a, c), -Infinity);
    rebound = Object.values(allPlayers()).filter(item => item.shoe===18)[0].rebounds;

    return `Rebounds : ${rebound}`
}

function pointsScored(playerNameInput) {
    return allPlayers()[playerNameInput].points;
}

function mostPointsScored() {
     points = Object.values(allPlayers()).map(num => num.points);
    mostPoints = points.reduce((a, b) => Math.max(a, b), 0);
    extraPoints = Object.values(allPlayers()).filter( extra => extra.points===mostPoints)[0].points;

    for (const player in allPlayers()) {
        if(pointsScored(player)===extraPoints) 
        return `Player with most points: ${player}`;
    }  
}

function winningTeam() {
    homePoints = Object.values(home()).map(pInfo=>pInfo.points).reduce((a, b)=>a + b, 0);
    awayPoints = Object.values(away()).map(pInfo=>pInfo.points).reduce((a, b)=>a + b, 0);

    if(homePoints>awayPoints) {
        return homeName();
    } else if (homePoints<awayPoints){
        return awayName();
    } else return `Draw between ${homeName()} and ${awayName()}`;
}

function playerWithLongestName() {
    playerName = Object.keys(allPlayers()).map(name => name.length).reduce((a, b)=>Math.max(a, b), 0);
    LongestName = Object.keys(allPlayers()).filter(name => name.length===playerName);
    return LongestName.toString();
}

function doesLongNameStealATon() {
    most = Object.values(allPlayers()).map(take => take.steals).reduce((a, b)=> Math.max(a, b), 0);
    playerSteals = allPlayers()[playerWithLongestName()].steals;

    return `Longest named player has the most steals: ${playerSteals===most? true: false}`;
}