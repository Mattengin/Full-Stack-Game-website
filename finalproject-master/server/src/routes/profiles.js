import { Router } from "express";
import * as gamerTagController from "../controllers/gamerTagsController";

const router = new Router();

router.get("/", (req, res, body) => {
    if(req.query.type === "tagsAndPlat" && req.query.id){
        // res.send(`querying, ${req.query.id}`);
        gamerTagController.getGamerTagsAndPlatforms(parseInt(req.query.id))
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })

    } else if(req.query.type === "tagByPlat" && req.query.platid && req.query.userid){
        gamerTagController.getGamerTagByPlatform(req.query.userid, req.query.platid)
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else {
        gamerTagController.getGamerTags()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    }
})

router.put("/:id", (req, res, body) => {
    gamerTagController.updateGamerTagName(req.params.id, req.body.newTag)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })

})

router.post("/", (req, res, body) => {
    gamerTagController.insertGamerTag(req.body.userId, req.body.newTag, req.body.platformId)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

export default router;