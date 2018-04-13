import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
import * as userController from "../controllers/userController";
import * as relationshipsController from "../controllers/friendController";

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

let RelationshipsTable = new Table('Relationships');

router.get('/', (req, res) => {
    console.log(req.user);
    RelationshipsTable.getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    RelationshipsTable.insert(req.body)
    .then((results) => {
        console.log('/', results)
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/requests', (req, res) => {
    // RelationshipsTable.post('spSelectUserFromRelationship', req.body.id)
    relationshipsController.getPending(req.body.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/friends', (req, res) => {
    relationshipsController.getAllFriends(req.body.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.post('/friends/:id', (req, res) => {
    relationshipsController.checkFriendship(req.body.userone, req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/requests/accept', (req, res) => {
    relationshipsController.acceptRequest(req.body.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.post('/requests/block', (req, res) => {
    relationshipsController.blockRequest(req.body.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    RelationshipsTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    RelationshipsTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;