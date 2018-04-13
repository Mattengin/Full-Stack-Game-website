import express from "express";
import ForumTable from "../table";

const forumTable = new ForumTable("forums");

function selectForums(){
    return forumTable.getAll();
}

// function selectForumInfo(forumId){
//     console.log("selectForumInfo");
//     return forumTable.putOrDeleteProcedure("spSelectForumInfo", [forumId]);
// }

function selectForumInfo(forumId){
    console.log("selectForumInfo");
    return forumTable.getOne(forumId);
}

function selectForumComments(forumId){
    return forumTable.putOrDeleteProcedure("spSelectForumComments", [forumId]);
}

function postNewForumComment(userId, forumId, commentText){
    return forumTable.postProcedure("spInsertForumComment", [userId, forumId, commentText]);
}

function postNewForum(title, forumImg, forumText, creatorId){
    return forumTable.postProcedure("spInsertForum", [title, forumImg, forumText, creatorId]);
}

function updateForum(forumId, commentId, forumTitle, forumImg, forumText) {
    return forumTable.putOrDeleteProcedure("spUpdateForum", [forumId, commentId, forumTitle, forumImg, forumText])
}

export {
    selectForums,
    selectForumInfo,
    selectForumComments,
    updateForum,
    postNewForum,
    postNewForumComment
}