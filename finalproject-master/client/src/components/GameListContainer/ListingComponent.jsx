import React, { Fragment, Component } from "react";
import GameListing from "../ListingPage/ListingPage";
import { get } from "../../services/base";

import LoadingComponent from "../LoadingViewContainer/LoadingViewContainer";
import Paginator from "../Paginator/Paginator";
import Style from "./GameListContainer.module.scss";
import { animateScroll as scroll } from "react-scroll";

class ListingComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            games: [],
            loading: false,
            working: false,
            limit: 10,
            offset: 0,
            listLimit: 0,
            pageNumber: 0
        }

        this.onGetNextGames = this.onGetNextGames.bind(this);
        this.onGetPreviosGames = this.onGetPreviosGames.bind(this);

    }

    gameToSearch;

    componentDidMount(){
        if(this.props.location.state.searchString){
            this.gameToSearch = this.props.location.state.searchString;
        }
        console.log("--mounting--");
        this.requestGames(this.state.offset, 1);
    }

    componentWillReceiveProps(newProps){
        // console.log("--updating props--", this.props.location.state.alias);
        if(!this.props.location.state.alias){
            console.log("--Updating again--");
            this.gameToSearch = newProps.location.state.searchString;
            this.requestGames(1, 1)
        }
    }

    requestGames(offset, pageNumber){

        console.log("--requesting--", pageNumber);

        const alias = (this.props.location.state.alias) ? this.props.location.state.alias : null;
        const searchString = (this.props.location.state.searchString) ? this.props.location.state.searchString : null;

        this.setState({
            games: [],
            loading: !this.state.loading,
            working: !this.state.working
        })

        if(alias){
            // console.log("--alias--", alias);
            // get(`http://localhost:3000/api/games?byPlatformName=${alias}`)
            get(`http://localhost:3000/api/games?byPlatformName=${alias}&limit=${this.state.limit}&offset=${offset}`)
            .then((response) => {

                let games = [];

                response.gamesList.map((item, index) => {
                    games.push({ 
                        gameId: item.id,
                        title: item.GameTitle, 
                        releaseDate: item.ReleaseDate, 
                        thumbnail: item.thumb});
                })

                this.setState({ 
                    games,
                    listLimit: response.listSize,
                    loading: !this.state.loading,
                    working: !this.state.working,
                    offset,
                    pageNumber
                 });
            })
            .catch((err) => {
                console.error(err);

                this.setState({
                    loading: !this.state.loading,
                    working: !this.state.working
                })
            })
        } else {
            get(`http://localhost:3000/api/games?byGameName=${this.gameToSearch}&limit=${this.state.limit}&offset=${offset}`)
            .then((response) => {

                let games = [];

                response.gamesList.map((item) => {
                    games.push({ 
                        gameId: item.id, 
                        title: item.GameTitle, 
                        releaseDate: item.ReleaseDate, 
                        thumbnail: item.Images.boxart.thumb});
                })

                this.setState({ 
                    games,
                    listLimit: response.listSize,
                    loading: !this.state.loading,
                    working: !this.state.working,
                    offset,
                    pageNumber
                    });
            })
            .catch((err) => {
                console.error(err);

                this.setState({
                    loading: !this.state.loading,
                    working: !this.state.working
                })
            })

        }
    }

    onGetPreviosGames(event){
        
        if(this.state.offset - this.state.limit >= 0){
            console.log("--previous--");
            // this.setState({
            //     offset: this.state.offset - 10,
            //     scroll: true
            // })
            this.requestGames(this.state.offset - this.state.limit, this.state.pageNumber-1);
        }


    }

    onGetNextGames(event){
        
        if(this.state.offset + this.state.limit <= this.state.listLimit){
            console.log("--next--");
            // this.setState({
            //     offset: this.state.offset + 10,
            //     scroll: true
            // })

            this.requestGames(this.state.offset + this.state.limit, this.state.pageNumber+1);
        }
    }

    render(){

        console.log("--rendering--", this.state.pageNumber);
        window.scrollTo(0, 0);

        let pageNumberComponent = this.state.loading ? null : <Fragment>
            <h1 className={`${Style.pageNumber}`}>{this.state.pageNumber}</h1>
        </Fragment>;

        let gamePaginationComponent = this.state.loading ? null : 
        <Fragment>
            <Paginator getNextGames={this.onGetNextGames} getPreviosGames={this.onGetPreviosGames} />
            {/* <button className="btn" onClick={scroll.scrollToTop}>Go Back!</button>  */}
        </Fragment>;



        return(
            <Fragment>

                {/* <div className='sweet-loading'>
                    <PacmanLoader
                    color={'#123abc'} 
                    loading={this.state.loading} 
                    />
                </div> */}
                <LoadingComponent loading={this.state.loading} />
                
                {pageNumberComponent}

                <GameListing currentList={this.state.games}/>

                {/* <Paginator getNextGames={this.onGetNextGames} getPreviosGames={this.onGetPreviosGames} /> */}
                {gamePaginationComponent}

            </Fragment>
        );
    }
}

export default ListingComponent;