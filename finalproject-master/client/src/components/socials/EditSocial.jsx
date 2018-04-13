import React, { Component } from 'react';
import { put } from '../../services/base';
import style from './social.module.scss';

class EditSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {

            twitter: null,
            instagram: null,
            twitch: null,
            youtube: null,
            avatar: null,
            handle: null
        }
    }

    handleTwitterChange(twitter) {
        this.setState({ twitter });
    }

    handleInstagramChange(instagram) {
        this.setState({ instagram });
    }

    handleTwitchChange(twitch) {
        this.setState({ twitch });
    }

    handleYoutubeChange(youtube) {
        this.setState({ youtube });
    }

    handleAvatarChange(avatar) {
        this.setState({ avatar });
    }

    handleNameChange(handle) {
        this.setState({ handle });
    }

    makeMultiplePosts(e) {

        e.preventDefault();

        const promise1 = put(
            `http://localhost:3000/api/users/${this.props.match.params.id}`,
            {
                avatar: this.state.avatar,
                handle: this.state.handle
            }
        )
        const promise2 = put(
            `http://localhost:3000/api/social/${this.props.match.params.id}`,
            {
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                twitch: this.state.twitch,
                youtube: this.state.youtube
            }
        )
        Promise.all([promise1, promise2]).then((results) => {
            console.log(results);
            this.props.history.push('/')
            return;
        }).catch((err) => {
            console.error(err);
        })

    }
   

    // editUserInfo(e) {

    //     e.preventDefault();

    //     put(
    //         `http://localhost:3000/api/users/${this.props.match.params.id}`,
    //         {
    //             avatar: this.state.avatar,
    //             handle: this.state.handle
    //         }
    //     )
    //     .then(() => {
    //         this.props.history.push('/')
    //     })
    // }

    // editSocialMedia(e) {

    //     e.preventDefault();

    //     put(
    //         `http://localhost:3000/api/social/${this.props.match.params.id}`, 
    //         {
    //             twitter: this.state.twitter,
    //             instagram: this.state.instagram,
    //             twitch: this.state.twitch,
    //             youtube: this.state.youtube
    //         }
    //     )
    //     .then(() => {
    //         this.props.history.push('/');
    //     })
    // }

    render() {
        return (
            <div className={ style.body }>
                <div className={ style.move }>
                    <h1 className={ style.heading }>edit profile</h1>
                    <div>
                        <input 
                            className={ style.avatar }
                            placeholder="avatar" 
                            value={ this.state.avatar } 
                            onChange={ (event) => this.handleAvatarChange(event.target.value)}
                        />
                        <i className="ion-person"></i>
                    </div>
                    <div>
                        <input
                            className={ style.handle } 
                            placeholder="handle" 
                            value={ this.state.handle } 
                            onChange={ (event) => this.handleNameChange(event.target.value)}
                        />
                        <i className="ion-at"></i>
                    </div>
                    {/* <div>
                        <button onClick={ (e) => {this.editUserInfo(e)} }>update user info</button>
                    </div> */}
                    <div className={ style.sm }>
                        <div>
                            <input 
                                className={ style.twitterTwo }
                                placeholder="twitter"
                                value={ this.state.twitter } 
                                onChange={ (event) => this.handleTwitterChange(event.target.value)}
                            />
                            <i className="ion-social-twitter-outline"></i>
                        </div>
                        <div>
                            <input 
                                className={ style.instagramTwo }
                                placeholder="instagram"
                                value={ this.state.instagram } 
                                onChange={ (event) => this.handleInstagramChange(event.target.value)}
                            />
                            <i className="ion-social-instagram"></i>
                        </div>
                        <div>
                            <input 
                                className={ style.twitchTwo }
                                placeholder="twitch" 
                                value={ this.state.twitch } 
                                onChange={ (event) => this.handleTwitchChange(event.target.value)}
                            />
                            <i className="ion-social-twitch-outline"></i>
                        </div>
                        <div>
                            <input 
                                className={ style.youtubeTwo }
                                placeholder="youtube"
                                value={ this.state.youtube } 
                                onChange={ (event) => this.handleYoutubeChange(event.target.value)}
                            />
                            <i className="ion-social-youtube-outline"></i>
                        </div>
                        <button onClick={ (e) => {this.makeMultiplePosts(e)} } className={ style.button }>update profile</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditSocial;