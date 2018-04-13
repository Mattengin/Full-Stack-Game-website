import React, { Fragment, Component } from "react";
import GameAddPiece from "./GameAddPiece";

import { me } from "../../services/user";
import { post } from '../../services/base'

class GameAddContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            gameInfo: this.props.location.state,
            currentGameId: this.props.match.params.id,
            userId: 0
        }

        this.handleSubmission = this.handleSubmission.bind(this);
    }

    componentDidMount(){
        me()
        .then((response) => {

            this.setState({ userId: response.id })
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }

    handleSubmission(event, gameInfoObj) {
        event.preventDefault();
        
        const currentParent = event.currentTarget.parentNode;
        const inputText = currentParent.querySelector("#hoursLoggedInput").value;
        const completedBool = currentParent.querySelector("#completedCheck").checked ? 1 : 0;
        let platformId = null;

        switch(gameInfoObj.gamePlatform){
            case "PC":
                    platformId = 1
                break;

            case "Sony Playstation 4":
                    platformId = 4919
                break;
            
            case "Microsoft Xbox One":
                    platformId = 4920
                break;

            case "iOS":
                    platformId = 4915
                break;

            case "Android":
                    platformId = 4916
                break;

            case "Nintendo Switch":
                    platformId = 4971
                break;
        }

        const requestObj = Object.assign({},
             { 
                 userId: this.state.userId, 
                 gameId: gameInfoObj.gameId, 
                 systemId: platformId, 
                 gameTitle: gameInfoObj.gameTitle, 
                 gameImg: gameInfoObj.gameThumbnail, 
                 hoursLogged: inputText,
                 gameCompleted: completedBool
                } )

        if(requestObj){
            post(`http://localhost:3000/api/gameList/`, requestObj)
            .then((response) => {
                // console.log(response);
                this.props.history.push("/MyGameList");
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    render(){

        return(

            <GameAddPiece infoObj={ Object.assign({}, { currentGameId: this.state.currentGameId }, this.state.gameInfo) } handleSubmission={this.handleSubmission} />
        )
    }

}

export default GameAddContainer;