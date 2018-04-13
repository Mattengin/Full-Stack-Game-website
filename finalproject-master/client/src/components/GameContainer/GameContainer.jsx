import React, { Component, Fragment } from "react"
import GameSingle from "./GamePiece";
import LoadingComponent from "../LoadingViewContainer/LoadingViewContainer";

import { get } from '../../services/base';

class GameContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            game: {},
            loading: false,
            working: false
        }

    }

    componentDidMount() {
        const imgBaseUrl = `http://thegamesdb.net/banners/`;

        this.setState({
            loading: !this.state.loading,
            working: !this.state.working
        })

        get(`http://localhost:3000/api/games?byGameId=${this.props.match.params.id}`)
        .then((response) => {
            
            this.setState({
                game: {
                    gameId: response.id,
                    gameTitle: response.GameTitle,
                    releaseDate: response.ReleaseDate,
                    numOfPlayers: response.Players,
                    platform: response.Platform,
                    thumbnail: response.Images.boxart.thumb,
                    images: {boxart: response.Images.boxart, banners: response.Images.banner, screens: response.Images.screenshot},
                    developer: response.Developer,
                    genres: response.Genres,
                    description: response.Overview ? response.Overview : `Sorry, this game lacks a description :(`
                },
                loading: !this.state.loading,
                working: !this.state.working
            })
        })
        .catch((err) => {
            console.log(err);
            throw err;
            this.setState({
                loading: !this.state.loading,
                working: !this.state.working
            });
        })
    }

    render(){
        return(
            <Fragment>

                
                {/* <div className='sweet-loading container mx-auto'>
                    <PacmanLoader
                    color={'#EEE8AA'} 
                    loading={this.state.loading} 
                    />
                </div> */}

                <LoadingComponent loading={this.state.loading} />

                <GameSingle infoObj={this.state.game} />
            </Fragment>
            
        );
    }

}

export default GameContainer;