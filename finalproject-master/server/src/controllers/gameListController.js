import express from "express";
import GameListTable from "../table";

const gameListTable = new GameListTable("games");

function selectGameList(userId){
    return gameListTable.putOrDeleteProcedure("spSelectGameList", [userId]);
}

function deleteFromGameList(userId, gameId){
    return gameListTable.putOrDeleteProcedure("spDeleteGameList", [userId, gameId]);
}

function insertGameToList(userId, gameId, systemId, gameTitle, gameImg, hoursLogged, gameCompleted){
    return gameListTable.postProcedure("spInsertGameList", [userId, gameId, systemId, gameTitle, gameImg, hoursLogged, gameCompleted]);
}

export {
    selectGameList,
    deleteFromGameList,
    insertGameToList
}