import React, { Fragment, Component } from "react";
import { get } from "../../services/base";

import ProfileSearchListing from "./ProfileSearchListing";
import MainNav from "../HomeNavBar/HomeNavBar";

class ProfileSearchContainer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            profiles: []
        };
    }

    userToSearch;

    componentDidMount(){
        this.userToSearch = this.props.match.params.searchString;
        this.searchUser();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("--is state the same?--", (this.state.profiles != nextState.profiles));
    //     return this.state.profiles != nextState.profiles;
    //   }

    // componentWillUpdate(){
    //     console.log("--recieving props--");
    //     this.searchUser();
    // }

    // componentDidUpdate(){
    //     console.log("--recieving props--");
    //     this.searchUser();
    // }

    componentWillReceiveProps(newProps){
        this.userToSearch = newProps.match.params.searchString;
        this.searchUser();
        // this.forceUpdate();
    }

    searchUser(){
        console.log("updating");
        let profiles = [];

        get(`http://localhost:3000/api/users/handle/${this.userToSearch}`)
        .then((response) => {
            
            response.forEach((item) => {
                profiles.push({
                    avatar: item.avatar,
                    userId: item.id,
                    userHandle: item.handle
                })
            })

            this.setState({ profiles })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(
            <Fragment>
                <MainNav />
                <ProfileSearchListing listingInfo={this.state.profiles} />
            </Fragment>
        )
    }
}

export default ProfileSearchContainer;