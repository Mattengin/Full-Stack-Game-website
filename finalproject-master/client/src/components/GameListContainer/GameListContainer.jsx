import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { get } from '../../services/base';

import NavComponent from "./GameListNav";
import ListingComponent from "./ListingComponent";
import GameContainer from "../GameContainer/GameContainer";
import GameAddContainer from "../GameAddContainer/GameAddContainer";
import HomeNav from "../HomeNavBar/HomeNavBar";
import Particles from 'react-particles-js';
import style from './GameListContainer.module.scss';

class GameListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: []
        }

    }

    render(){

        return(
            <Fragment>

                <HomeNav />

                <div className={`container`}>

                    <NavComponent textChange={this.onInputChange} onDropSearch={this.onDropSearch}/>

                    <Route exact path="/GameCatalogue/gameSearch/search/:searchString" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/sony+playstation+4" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/nintendo+switch" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/microsoft+xbox+one" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/pc" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/android" component={ListingComponent} />
                    <Route exact path="/GameCatalogue/gameSearch/ios" component={ListingComponent} />
                    {/* <Route exact path="/GameCatalogue/gameSearch/:searchString" component={ListingComponent} /> */}

                    <Route exact path="/GameCatalogue/Game/:id" component={GameContainer} />
                    <Route exact path="/GameCatalogue/GameAdd/:id" component={GameAddContainer} />

                </div>
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

            </Fragment>
            
        );
    }
}

export default GameListContainer;