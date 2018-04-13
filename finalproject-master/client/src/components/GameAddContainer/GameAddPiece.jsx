import React, { Fragment } from "react";
import Style from "./GameAddContainer.module.scss";

function GameAddPiece(props) {

    return(
        <div className={`jumbotron`}>
            <div className="container">
                <section className="panel">
                    <div className="media">
                        <div className="media-left media-middle">
                            <img className="media-object img-thumbnail" src={props.infoObj.gameThumbnail} alt="..."/>
                        </div>
                        <div className="media-body">
                            <h2>{props.infoObj.gameTitle}</h2>
                            <p>{props.infoObj.gameDescription}</p>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <h4 className={Style.darkText}>{props.infoObj.gamePlatform}</h4>
                    </div>
                </section>

                <section className="gameListInfo">
                    <div className="needs-validation" noValidate>

                        <label htmlFor="hoursLoggedInput"> <i className="glyphicon glyphicon-time" required></i> Hours Logged: </label> 
                        <input id="hoursLoggedInput" className="ml-3" type="number"/> 

                        <div className="form-check">
                            <label className="form-check-label mr-5" htmlFor="completedCheck">Have you beat it?</label>
                            <input type="checkbox" className="form-check-input" id="completedCheck" />
                        </div>
                        
                        <button 
                            className="btn btn-primary"
                            onClick={event => props.handleSubmission(event, props.infoObj)}
                        >Submit</button>

                    </div>
                </section>

            </div>
        </div>
    );
}

export default GameAddPiece;