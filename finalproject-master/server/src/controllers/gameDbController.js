import express from "express";
import request from 'request';

function getGames(){
    console.log("getting games");
    return new Promise((resolve, reject) => {
        request(`http://thegamesdb.net/api/GetGamesList.php?platform=Sony Playstation 4`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);
            
            resolve(body);
        });
    });
}


/* Gets games from the game api by the id used for their platform
    possible platformIds
        1 - PC (The glorious master race!)
        4919 - Sony Playstation 4
        4971 - Nintendo Switch
        4915 - iOS
        4916 - Android
        4920 - Microsoft Xbox One
*/
function getGamesByPlatformId(platformId){
    return new Promise((resolve, reject) => {
            request(`http://thegamesdb.net/api/GetPlatformGames.php?platform=${platformId}`,{
                method: "GET",
                mode: "cors",
                gzip: true
            }, (err, response, body) => {
                if (err) reject(err);
    
                resolve(body);
            });
        });
}

/*
    Gets games from the game api by their genre.
        role - rpg
        action
        shooter
*/

function getGamesByGenre(genreString){
    return new Promise((resolve, reject) => {
        request(`http://thegamesdb.net/api/GetGamesList.php?genre=${genreString}`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);

            resolve(body);
        });
    });
}

function getGameById(gameId){
    return new Promise((resolve, reject) => {
        // http://thegamesdb.net/api/GetGame.php?name=${gameId}
        // http://thegamesdb.net/api/GetGame.php?id=${gameId}
        request(`http://thegamesdb.net/api/GetGame.php?id=${gameId}`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);

            resolve(body);
        });
    });
}

function getGameByString(gameString){
    return new Promise((resolve, reject) => {
        // http://thegamesdb.net/api/GetGame.php?name=
        // http://thegamesdb.net/api/GetGamesList.php?name=
        request(`http://thegamesdb.net/api/GetGame.php?name=${gameString}`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);

            resolve(body);
        });
    });
}

function getGamesByPlatformName(platformName){

    const fixString = platformName.split(" ").join("+");

    return new Promise((resolve, reject) => {
        request(`http://thegamesdb.net/api/PlatformGames.php?platform=${fixString}`, {
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if(err) reject(err);

            resolve(body);
        });
    })

    // return new Promise((resolve, reject) => {
    //     // if(err) reject(err);

    //     resolve(fixString);
    // })
}

export {
    getGames,
    getGamesByPlatformId,
    getGamesByPlatformName,
    getGamesByGenre,
    getGameById,
    getGameByString
}