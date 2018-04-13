import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import MyStyle from "./UserGameListContainer.module.scss";

import { animateScroll as scroll } from "react-scroll";

function GameList(props) {

    // console.log("--myGames--", props.myGames);

    return(
        <div className={`jumbotron ${MyStyle.transparentBackground}`}>

            <div className={`container ${MyStyle.listingContainer}`}>
                {props.myGames.map((item, index) => {
                    const gameCompleted = item.gameCompleted === 1 ? "yes" : "no";
                    return(
                        <div className="panel" key={`user-game-listing-${index}`}>
                            <div className="panelMask">
                            </div>
                            <div className={`media ${MyStyle.borderedDiv}`}>
                                <div className="media-left">
                                    <Link to={`/GameCatalogue/Game/${item.gameId}`}>
                                    <img className="media-object img-thumbnail" src={item.gameImg} alt="..."/>
                                    </Link>
                                </div>
                                <div className={`media-body ${MyStyle.mediaBody}`}>
                                    <h4 className={`media-heading ${MyStyle.heading}`}>{item.gameTitle}</h4>
                                    <div>
                                        <span className={`pr-5 ${MyStyle.hoursLogged}`}>Hours Logged: {item.hoursLogged}</span> <span className={`${MyStyle.completed}`}>Completed? {gameCompleted}</span>
                                    </div>
                                    
                                    <i 
                                        className={`glyphicon glyphicon-remove-circle ml-5 ${MyStyle.removeIcon}`}
                                        onClick={(event) => props.onDeleteHandler(event, item.gameId)}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

                <span className={`glyphicon glyphicon-chevron-up ${MyStyle.chevron}`} onClick={scroll.scrollToTop}></span>

        </div>

    );

}

export default GameList;