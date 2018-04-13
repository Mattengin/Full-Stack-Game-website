import { Router } from 'express';
import * as smController from '../controllers/smController';

const router = new Router();

router.get('/', (req, res, next) => {
    
    smController.selectSocials()
    .then((response) => {
        res.json(response);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500)
    })

})

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    smController.selectUserSocial(id)
    .then((id) => {
        res.json(id);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    })
})

router.post('/:id', (req, res, next) => {
    let social = {
        userid: req.params.id,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        twitch: req.body.twitch,
        discord: req.body.discord,
        youtube: req.body.youtube
    }
    smController.addSocialMedia([social.userid, social.twitter, social.instagram, social.twitch, social.discord, social.youtube])
    .then((response) => {
        res.send(response);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    })
})

router.put('/:id?', (req, res, next) => {
    console.log(res);
    let id = req.params.id;
    let social = {
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        twitch: req.body.twitch,
        discord: req.body.discord,
        youtube: req.body.youtube
    }
    smController.editSocialMedia([id, social.twitter, social.instagram, social.twitch, social.discord, social.youtube])
    .then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500)
    })
})



router.delete('/:id?', (req, res, next) => {
    let id = req.params.id;
    smController.deleteSocialMedia(id)
    .then(() => {
        res.send('Deleted');
    }).catch((err) => {
        console.error(err);
    })
})

export default router;