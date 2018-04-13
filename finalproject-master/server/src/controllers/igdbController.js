require("dotenv").config();
import "isomorphic-fetch";
import GameDb from "igdb-api-node";

const gameDbClient = new GameDb(process.env.IGDB_API_KEY);

function getGames(){
    // return gameDbClient.games({
    //     fields: [
    //         "name",
    //         "release_dates.date",
    //         "rating",
    //         "hypes",
    //         "cover",
    //         "summary",
    //         "category",
    //         "platforms"
    //     ],
    //     filters: {
    //         "release_dates.date-gt": "2013-11-15",
    //         "exists": "platforms",
    //         "platforms": [6, 34, 39, 48, 49, 130],
    //         "category": 0
    //     },
    //     limit: 50,
    //     offset: 0
    // });

    // return gameDbClient.games({
    //     filters: {
    //         "exists": "platforms",
    //         "platforms": [6, 34, 39, 48, 49, 130],
    //         "category": 0
    //     },
    //     limit: 50,
    //     offset: 0
    // }, [
    //     "name",
    //     "release_dates.date",
    //     "rating",
    //     "hypes",
    //     "cover",
    //     "summary",
    //     "category",
    //     "platforms"
    // ]);

    // https://api-endpoint.igdb.com/games/?limit=50&fields=name,genres,cover,platforms,summary&filter[platforms][any]=6,34,39,48,49,130&filter[category][any]=0&filter[exists]=platforms&filter[release_dates.date][gt]=2013-11-15&scroll=1
    return fetch(`https://api-endpoint.igdb.com/games/?limit=50&fields=name,platforms,summary,category&filter[platforms][any]=6,34,39,48,49,130&filter[category][any]=0&filter[exists]=platforms&filter[release_dates.date][gt]=2013-11-15&scroll=1`,
{
    method: "GET",
    mode: "cors",
    headers: new Headers({
        "user-key" : process.env.IGDB_API_KEY,
        "Accept" : "application/json"
    })
})
}

function getGame(gameString){
    console.log("--server params--", gameString);
    return gameDbClient.games({
        fields: [
            "name",
            "release_dates.date",
            "rating",
            "hypes",
            "cover",
            "summary"
        ],
        limit: 20,
        offset: 0,
        order: 'release_dates.date:desc',
        search: gameString
    })
}

function getGameByGenre(genreString){
    console.log(genreString);
    return gameDbClient.genres({
        fields: ["name", "games", "platforms"],
        search: genreString
    }, ["games", "name"])
}

function getScrollGamesByGenre(genreString){
    console.log(genreString);
    //`/genres/12?fields=games.name&expand=games`
    return gameDbClient.scrollAll(`/genres/12?fields=games.name`);
}

function test(){
    return client.companies({
        field: 'name',
        limit: 5,
        offset: 0,
        order: 'name:desc',
        search: 'rockstar'
        }, [
            'name',
            'logo'
        ])
}

export {
    getGames,
    getGame,
    getGameByGenre,
    getScrollGamesByGenre,
    test
}