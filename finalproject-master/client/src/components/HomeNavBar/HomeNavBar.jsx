import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './HomeNavBar.module.scss';
import { isLoggedIn, me } from '../../services/user';
import { get } from '../../services/base';

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import ForumCarousel from '../ForumCarousel/ForumCarousel';
import NewUserForm from '../NewUser/NewUserForm';
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import FriendsPanel from '../FriendsPanel/FriendsPanel';

class HomeNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            handle: '',
            firstname: '',
        }
    }
    componentDidMount(){
        if(isLoggedIn()){
            me()
            .then((res) => {
                this.setState({id: res.id, handle: res.handle, firstname: res.firstname});
            })
        }
    }
    render() {
        if(isLoggedIn()) {
            return (
                <Fragment>
                <LoggedBanner id={this.state.id} handle={this.state.handle} firstname={this.state.firstname} />
                {/* <FriendsPanel loggedId={this.state.id} /> */}
                </Fragment>
            )
        } 
        return (
            <Fragment>
            <UnloggedBanner />
            
                <div className={style.homeBody}>
                    <div className={style.leftsquare}>
                        <div class="col-sm-12" className={style.carouselContainer}>
                            <ForumCarousel />
                        </div>
                    </div>
                    <div class="col-sm-12" className={style.rightsquare}>
                        <h1>Join us.</h1>
                        <NewUserForm />
                    </div>
                </div>  
            </Fragment>
        )
    }
}

export default HomeNavBar;