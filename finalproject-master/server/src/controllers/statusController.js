require("dotenv").config();
import express from "express";
import mysql from 'mysql';
import StatusTable from "../table";
import { executeQuery } from "../config/db";
import sql from 'sql-template-strings';

const statusTable = new StatusTable("status");

function getStatuses(id, ids, limit = 10, offset = 0){
    // dbRef.executeQuery
    return executeQuery(`select s.*, u.handle, u.avatar, CASE WHEN NOT ISNULL(l.userid) THEN true ELSE false END as 'liked' from status s join users u on s.userid = u.id left outer join likes l on l.statusid = s.id AND l.userid = ? where s.userid in (?) LIMIT ? OFFSET ?; select found_rows() as 'count';`, [id, ids, limit, offset]);
}

function getUserStatuses(id, ids, limit = 10, offset = 0){
    // dbRef.executeQuery
    return executeQuery(`select s.*, u.handle, u.avatar, CASE WHEN NOT ISNULL(l.userid) THEN true ELSE false END as 'liked' from status s join users u on s.userid = u.id left outer join likes l on l.statusid = s.id AND l.userid = ? where s.userid in (?) LIMIT ? OFFSET ?; select found_rows() as 'count';`, [id, ids, limit, offset]);
}
// getStatuses([81, 111, 121, 131, 1])
// .then((results) => {
//     console.log(results);
// })
// .catch(err => {
//     console.error(err);
// });




// function getStatuses(ids, offset, limit) {
// 	select SQL_CALC_FOUND_ROWS s.*, u.handle, u.avatar from status s join users u on s.userid = u.id where userid in (81, 111, 121, 131, 1) LIMIT 10 OFFSET 0;
//     select 
// 		found_rows() as 'count';

//     select * from status;
// }

export {
    getStatuses
}