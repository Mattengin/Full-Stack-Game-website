import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import ListingStyle from "./ListingPage.module.scss";

function ListingPage (props){
    return (
        props.currentList.map((item, index) => {

            return (
                <div key={`game-listing-number-${index}`} id={item.gameId} className={`${ListingStyle.mainDiv}`}>
                    <div className="media">
                        <div className="media-left">
                            <Link
                                to={`/GameCatalogue/Game/${item.gameId}`}
                            >
                            <img src={`http://thegamesdb.net/banners/${item.thumbnail}`} alt=""/>
                            </Link>
                        </div>
                        <div className="media-body">
                            <h1 className="media-heading">{item.title}</h1>
                            <h4>Release Date: {item.releaseDate}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default ListingPage;