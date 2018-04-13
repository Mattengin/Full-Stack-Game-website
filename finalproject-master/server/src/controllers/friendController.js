import express from "express";
import mysql from 'mysql';
import FriendsTable from "../table";
import { executeQuery } from '../config/db';

const friendsTable = new FriendsTable("relationships");

function getFriends(userId) {
    return friendsTable.getOne(userId);
}

function getAllFriends(userId){
    let sql = `SELECT * FROM RELATIONSHIPS WHERE (user_one_id = ${userId} or user_two_id = ${userId}) and status_interaction = 1;`;
    return executeQuery(sql);
}
function getPending(userId) {
    // return executeQuery(`CALL spSelectUserFromRelationship(${userId})`);
    return friendsTable.putOrDeleteProcedure("spSelectUserFromRelationship", [userId]);
}

function acceptRequest(id) {
    let sql = `UPDATE RELATIONSHIPS SET status_interaction = 1 WHERE id = ${id};`;
    return executeQuery(sql);
}
function blockRequest(id) {
    let sql = `UPDATE RELATIONSHIPS SET status_interaction = 2 WHERE id = ${id};`;
    return executeQuery(sql);
}
function checkFriendship(userone, usertwo){
    let sql = `select * from relationships where user_one_id = ${userone} and user_two_id = ${usertwo} and status_interaction = 1 or user_one_id = ${usertwo} and user_two_id = ${userone} and status_interaction = 1;`
    return executeQuery(sql);
}




export {
    getFriends,
    getPending,
    acceptRequest,
    blockRequest,
    getAllFriends,
    checkFriendship
}