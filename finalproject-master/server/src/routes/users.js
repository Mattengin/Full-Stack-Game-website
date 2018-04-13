import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
import * as userController from "../controllers/userController";

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

let usersTable = new Table('Users');

router.get('/', (req, res) => {
    console.log(req.user);
    usersTable.getAllProcedure()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    usersTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    usersTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get("/handle/:handle", (req, res, body) => {
    userController.getUserByHandle(req.params.handle)
    .then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

router.put('/:id', (req, res) => {
    usersTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// controllers
// router.delete('/:id', (req, res) => {
//     usersTable.delete(req.params.id)
//     .then((results) => {
//         res.json(results);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     });
// });
// router.get("/", (req, res, body) => {
//     userController.getUsers()
//     .then((Response) => {
//         res.send(Response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(400);
//     })
// })

// router.get("/:id", (req, res, body) => {
//     userController.getUser(req.params.id)
//     .then((Response) => {
//         res.send(Response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send(404);
//     })
// })

// router.post("/newuser", (req, res, body) => {
//     // console.log(req.body);
//     // res.send("stuff");
//     // userController.addUser(req.body)
//     userController.addUser([req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.handle, req.body.avatar])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(403);
//     })
// })

// router.get("/gamertagandplat/:id", (req, res, body) => {
//     userController.getGamerTagAndPlatform([req.params.id])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(404);
//     })
// })

// router.delete("/:id", (req, res, body) => {
//     userController.deleteUser([req.params.id])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(403);
//     })
// })

export default router;