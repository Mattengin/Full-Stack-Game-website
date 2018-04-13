import React, { Component, Fragment } from 'react';
import { post } from '../../services/base';
import style from './social.module.scss';


import HomeNav from "../HomeNavBar/HomeNavBar";

class AddSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            twitter: '',
            instagram: '', 
            twitch: '',
            youtube: ''
        }
    }

    handleTwitterInsert(twitter) {
        this.setState({ twitter });
    }

    handleInstagramInsert(instagram) {
        this.setState({ instagram });
    }

    handleTwitchInsert(twitch) {
        this.setState({ twitch });
    }

    handleYoutubeInsert(youtube) {
        this.setState({ youtube });
    }

    addSocialMedia(e) {

        e.preventDefault();
        console.log(this.props.match.params.id);
        post(
            `http://localhost:3000/api/social/${this.props.match.params.id}`,
            {
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                twitch: this.state.twitch,
                youtube: this.state.youtube
            }
        )

        .then(() => {
            alert('social media added');
            this.props.history.push('/');
        })
    }


    render() {
        return (
            <div className={ style.body }>
                <HomeNav />
                <h1 className={ style.heading }>thank you for signing up!<br /> add your social media so you and others can connect!</h1>
                <div>
                    <input
                        className={ style.twitterTwo }
                        placeholder="twitter" 
                        value={this.state.twitter} 
                        onChange={ (event) => {this.handleTwitterInsert(event.target.value)}}
                    />
                    <i className="ion-social-twitter-outline"></i>
                </div>
                <div>
                    <input
                        className={ style.instagramTwo }
                        placeholder="instagram" 
                        value={this.state.instagram} 
                        onChange={ (event) => {this.handleInstagramInsert(event.target.value)}}
                    />
                    <i className="ion-social-instagram"></i>
                </div>
                <div>
                    <input
                        className={ style.twitchTwo }
                        placeholder="twitch" 
                        value={this.state.twitch} 
                        onChange={ (event) => {this.handleTwitchInsert(event.target.value)}}
                    />
                    <i className="ion-social-twitch-outline"></i>
                </div>
                <div>
                    <input
                        className={ style.youtubeTwo }
                        placeholder="youtube" 
                        value={this.state.youtube} 
                        onChange={ (event) => {this.handleYoutubeInsert(event.target.value)}}
                    />
                    <i className="ion-social-youtube-outline"></i>
                </div>
                <button onClick={ (e) => {this.addSocialMedia(e)} } className={ style.button }>add social media</button>
            </div>
        );
    }
}

export default AddSocial;