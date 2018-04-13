import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileNav from './ProfileNav';
import ProfileView from './ProfileView';
import ProfileViewPort from './ProfileViewPort';
import img from './Discord-Logo-Black.svg';

class ProfilePic extends Component {

    render() {
        return (
            <figure className="snip">
            <div className="profile-image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png" alt="sample47" /></div>
            <figcaption>
              <h3>{this.props.firstname} {this.props.lastname}</h3>
             <ProfileView />
              <p>Your time is up, my time is now
                You can't see me, my time is now.
                Its the franchise, Boy, I'm shining now.
                You can't see me, my time is now.
                </p>
                
              <div className="icons">
                <a href="#"><i className="ion-playstation"></i></a>
                  <a href="#"> <i className="ion-xbox"></i></a>
                  <a href="#"> <i className="ion-mouse"></i></a>
                  <a href="#"> <i className="ion-social-instagram-outline"></i></a>
                  <a href="#"> <i className="ion-social-twitter-outline"></i></a>
                  <a href="#"> <i className="ion-social-twitch-outline"></i></a>
                  <a href="#"> <i className="ion-social-youtube"></i></a>
                  {/* <a href="#"> <i className=""><img src={ img } alt="" srcset=""/></i></a> */}
              </div>
              <ProfileNav />
            </figcaption>
            <ProfileViewPort />
          </figure>
          
            

         
        )
    }
}

export default ProfilePic;