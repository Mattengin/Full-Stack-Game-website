import express from "express";
import mysql from 'mysql';
import Table from "../table";
import { executeQuery } from '../config/db';

const likesTable = new Table("likes");

function unlike(statusid, userId){
    let sql = `delete FROM likes where statusid = ${statusid} and userid = ${userId};`
    return executeQuery(sql);
}

function getAllLikes(statusid){
    let sql = `select * from likes where statusid = ${statusid};`
    return executeQuery(sql);
}

export {
    unlike,
    getAllLikes
}