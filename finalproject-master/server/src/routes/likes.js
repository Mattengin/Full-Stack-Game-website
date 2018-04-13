import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
import * as userController from "../controllers/userController";
import * as relationshipsController from "../controllers/friendController";
import * as likesController from "../controllers/likesController";

let router = Router();

let LikesTable = new Table('Likes');

router.get('/', (req, res) => {
    console.log(req.user);
    LikesTable.getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    console.log(req.user);
    likesController.getAllLikes(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    LikesTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
    likesController.unlike(req.body.statusid, req.body.userid)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})


export default router;