import express from "express";
import GamerTagTable from "../table";

const gamerTagTable = new GamerTagTable("gamertags")

function getGamerTags(){
    return gamerTagTable.getAll();
}

function updateGamerTagName(tagId, newTag){
    return gamerTagTable.update(tagId, {gamertag: newTag});
}

function insertGamerTag(userId, newTag, platformId){
    return gamerTagTable.postProcedure("spInsertGamerTag", [userId, newTag, platformId]);
}

function getGamerTagsAndPlatforms(userId){
    return gamerTagTable.putOrDeleteProcedure("spSelectGamerTagAndPlatform", [userId])
}

function getGamerTagByPlatform(userId, platId){
    return gamerTagTable.putOrDeleteProcedure("spSelectGamerTagByPlatform", [userId, platId]);
}

export {
    getGamerTags,
    updateGamerTagName,
    insertGamerTag,
    getGamerTagsAndPlatforms,
    getGamerTagByPlatform
}