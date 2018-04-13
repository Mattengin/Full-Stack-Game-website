import React from "react";
import GameCarousel from "../CarouselContainer/CarouselContainer";
import { Link } from "react-router-dom";

import Style from "./GameContainer.module.scss";

function GamePiece(props) {
    const imgBaseUrl = `http://thegamesdb.net/banners/`;
    let gameThumbnail = null;


    if(props.infoObj.images){
        gameThumbnail = (props.infoObj.thumbnail == undefined) ?  props.infoObj.images.boxart[1].thumb : props.infoObj.thumbnail;
    } else {
        gameThumbnail = props.infoObj.thumbnail
    }

    const gameImgUrl = imgBaseUrl + gameThumbnail;

    console.log("--img url--", gameImgUrl, "--thumb--", gameThumbnail);

    return(
        // <h1>Stuff</h1>
        <div className={`jumbotron ${Style.blurBackgroundStage1}`}>
            <div className={`container`}>
                <section  className={`gameHeadline panel ${Style.blurBackgroundStage2}`}>
                    <img src={imgBaseUrl + gameThumbnail} alt="" className="center-block"/>

                    <div className={`panel-footer ${Style.blurBackgroundStage3}`}>
                    <h1>
                        {props.infoObj.gameTitle} 
                        <Link 
                        to={{
                                pathname: `/GameCatalogue/GameAdd/${props.infoObj.gameId}`,
                                state: { 
                                    gameTitle: props.infoObj.gameTitle, 
                                    gameId: props.infoObj.gameId, 
                                    gameThumbnail: imgBaseUrl + gameThumbnail, 
                                    gamePlatform: props.infoObj.platform, 
                                    gameDescription: props.infoObj.description }
                            }} 
                        >
                            <i className="ml-3 glyphicon glyphicon-check"></i>
                        </Link>
                    </h1>
                    <h2>{props.infoObj.platform}</h2>
                    <h3>Developer: <small>{props.infoObj.developer}</small></h3>
                    <h4>players: {props.infoObj.numOfPlayers}</h4>
                    </div>
                </section>

                <section className={`gameDescription`}>
                    <h4>{props.infoObj.releaseDate}</h4>
                    {/* <h5></h5> */}
                    {/* <h5></h5> for genre */}
                    <h3>Description: </h3>
                    <p>{props.infoObj.description}</p>
                    
                    {/* <GameCarousel /> */}
                </section>
            </div>
        </div>
    )
}

export default GamePiece;