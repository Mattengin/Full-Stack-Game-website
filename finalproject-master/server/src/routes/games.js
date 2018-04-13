import { Router } from "express";
// import * as gamesDbController from "../controllers/igdbController";
import * as gameDbController from "../controllers/gameDbController";
import * as OccamTools from "../utils/occamTools";
import zlib from 'zlib';
import parser from 'xml2json';

const router = Router();

router.get("/", (req, res, body) => {

    /* 
        Example requests: 
            mainReqest: localhost:3000/api/games/byPlatformName=pc&limit=10&offset=10 (This is the required request shape. All requests should have limit and offset set.)
                byPlatformId: localhost:3000/api/games?byPlatformId=1 (Depreciated)
                byGenre: localhost:3000/api/games?byGenre=action (Depreciated)
                byGameName: localhost:3000/api/games?byGameName=call of duty
                byGameId: localhost:3000/api/games?byGameId=1
                byPlatformName: localhost:3000/api/games?byPlatformName=playstation+4
    */
    if(req.query.limit && req.query.offset){
        
        if(req.query.byPlatformName && isNaN(req.query.byPlatformName)) {
            console.log("--platform name--", req.query.byPlatformName);
            gameDbController.getGamesByPlatformName(req.query.byPlatformName)
            .then((response) => {
                let parsed = JSON.parse(parser.toJson(response)).Data.Game;

                let arrToSend = [];

                parsed.map((item, index) => {
                    if(item.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate") && (new Date(item.ReleaseDate) >= new Date("11/15/2013"))){
                        console.log("--server--", "index", index, "date", item.ReleaseDate);
                        arrToSend.push(item);
                    }
                    
                })

                const listLimit = arrToSend.length;

                arrToSend = OccamTools.scaleArray(req.query.offset, req.query.limit, arrToSend);

                const sendPackage = {gamesList: arrToSend, listSize: listLimit}

                res.send(sendPackage);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(403);
            })
        } else if(req.query.byGameName && isNaN(req.query.byGameName)){
            // res.send(`Game Name: ${req.query.byGameName}`);
            gameDbController.getGameByString(req.query.byGameName)
            .then((response) => {
                let parsed = JSON.parse(parser.toJson(response)).Data.Game;

                let arrToSend = [];

                parsed.map((item, index) => {
                    if(item.hasOwnProperty("Images") && item.Images.hasOwnProperty("boxart") && item.Images.boxart.hasOwnProperty("thumb") && item.hasOwnProperty("ReleaseDate") && (new Date(item.ReleaseDate) >= new Date("11/15/2013"))){
                        console.log("--server--", "index", index, "date", item.ReleaseDate);
                        arrToSend.push(item);
                    }
                    
                })

                const listLimit = arrToSend.length;

                arrToSend = OccamTools.scaleArray(req.query.offset, req.query.limit, arrToSend);

                const sendPackage = {gamesList: arrToSend, listSize: listLimit}

                res.send(sendPackage);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(403);
            })
        }
        
    } else if(req.query.byGameId && !isNaN(req.query.byGameId)){
        // res.send(`Game Id: ${req.query.byGameId}`);
        gameDbController.getGameById(req.query.byGameId)
        .then((response) => {
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else {
        res.sendStatus(403);
    }
})

export default router;