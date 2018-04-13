import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
let router = Router();
import { getStatuses } from '../controllers/statusController';
import { read } from 'fs';

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

let usersTable = new Table('Status');

router.post('/friends/:id', (req, res) => {
    let id = req.params.id;
    let ids = req.body.ids || [];
    let limit = req.query.limit || 100;
    let offset = req.query.offset || 0;

    getStatuses(id, ids, limit, offset)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/:id', (req, res) => {
    let id = req.body.id;
    let ids = [req.params.id];
    let limit = req.query.limit || 100;
    let offset = req.query.offset || 0;

    getStatuses(id, ids, limit, offset)
    .then((results) =>{
        res.json(results[0]);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    usersTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/friends', (req, res) => {
    usersTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// router.get('/:id', (req, res) => {
//     usersTable.getOne(req.params.id)
//     .then((results) => {
//         res.json(results);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     });
// });

router.get('/:id', (req, res) => {
    usersTable.putOrDeleteProcedure("spSelectStatusInfo", [req.params.id])
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    usersTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    usersTable.delete(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
export default router;