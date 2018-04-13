import React, { Fragment, Component } from "react";
import HomeNav from "../HomeNavBar/HomeNavBar";
import GameListing from "./GameList";
import Particles from 'react-particles-js';
import { Redirect } from "react-router-dom";
import style from './UserGameListContainer.module.scss';

import { me } from "../../services/user";
import { get } from "../../services/base";
import { destroy } from "../../services/base";

import MyStyle from "./UserGameListContainer.module.scss";

class UserGameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUserId: null,
            gameListInfo: [],
            redirect: false
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentDidMount(){
        me()
        .then((response) => {

            get(`http://localhost:3000/api/gameList/${response.id}`)
            .then((gameListInfo) => {
                this.setState({ currentUserId: response.id ,gameListInfo, redirect: false })
            })
            .catch((err) => {
                console.log(err);
            })

        })
        .catch((err) => {
            console.log(err);
        })
    }

    onDeleteHandler(event, gameId) {
        console.log("--ids to delete--", this.state.currentUserId, gameId);

        destroy("http://localhost:3000/api/gameList/", {userId: this.state.currentUserId, gameId})
        .then((response) => {
            console.log(response);
            this.setState({redirect: true})

            // this.props.history.push("/MyGameList");
            // this.forceUpdate();
            window.location.reload();

        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){

        console.log("--redirect--", this.state.redirect);
        // if (this.state.redirect) {
        //     return (
        //         <Redirect to={`/MyGameList`} />
        //     );
        // } 

        return(
            <div className={`${MyStyle.mainPiece}`}>
                <HomeNav />
                <GameListing myGames={this.state.gameListInfo} onDeleteHandler={this.onDeleteHandler} />
                <Particles 
                    className={style.bg} 
                    width="100%" height="100%" 
                    params={ {
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "whitesmoke",
                                    blur: 5,
                                }
                            },
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 1200
                                }
                            }
                        }
                    } } 
                />
            </div>
        );
    }

}

export default UserGameListContainer;