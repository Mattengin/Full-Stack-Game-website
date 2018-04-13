import express from 'express';
import Table from '../table';

const smTable = new Table("SocialMedia");

function selectSocials() {
    return smTable.getAll();
}

function selectUserSocial(id) {
    return smTable.putOrDeleteProcedure("spSelectAUsersSocialMedia", [id]);
}

function addSocialMedia(smparams) {
    return smTable.postProcedure("spInsertSocialMedia", smparams);
}

function editSocialMedia(smparams) {
    return smTable.putOrDeleteProcedure("spUpdateSocialMedia", smparams);
}

function deleteSocialMedia(id) {
    return smTable.putOrDeleteProcedure("spDeleteSocialMedia", [id]);
}

export {
    selectSocials,
    selectUserSocial,
    addSocialMedia,
    editSocialMedia,
    deleteSocialMedia
}