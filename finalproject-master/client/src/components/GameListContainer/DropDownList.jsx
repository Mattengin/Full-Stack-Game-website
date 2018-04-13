import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function DropDownList(props){
    // console.log(props, "Name: ", props.dropDownName);
    return(
            <Fragment>
                {props.listings.map((listing, index) => {

                    let divider;

                    {if(index < props.listings.length-1){
                        divider = <li className="divider"></li>;
                    }}

                    if(props.dropDownName === "platform"){
                        return(
                            <Fragment key={`dropDown-${props.dropDownName}-listing-${index}`}>
                                <li>
                                    <Link 
                                        to={{
                                            pathname: `/GameCatalogue/gameSearch/${listing.alias}`,
                                            state: { searchQuery: listing.name, alias: listing.alias }
                                        }} 
                                    >{listing.name}</Link>
                                </li>
                                {divider}
                            </Fragment>
                        );
                    } else if(props.dropDownName === "genre"){
                        return(
                            <Fragment key={`dropDown-${props.dropDownName}-listing-${index}`}>
                                <li>
                                    <Link
                                        to={{
                                            pathname: "/GameCatalogue/gameSearch",
                                            state: { searchQuery: listing.name, searchString: listing.queryName ? listing.queryName : listing.name }
                                        }}
                                    >
                                        {listing.name}
                                    </Link>
                                </li>
                                {divider}
                            </Fragment>
                        );
                    }
                    
                })}
            </Fragment>
    );
}

export default DropDownList;