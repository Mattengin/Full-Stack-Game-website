import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateRoute';
import styles from "./ProfileCard.scss";
import ProfilePanel from './ProfileTop';
import UserPosts from './UserPosts/UserPosts';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import { isLoggedIn, me } from '../../services/user';
import { get, post } from '../../services/base';
import Particles from 'react-particles-js';
import Social from '../socials/Social';



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            loggedId: '',
            handle: '',
            firstname: '',
            lastname: '',
            avatar: '',
            profileid: '',
            friendcheck: [],
            button: 'Add Friend',
        }
    }
    componentDidMount(){
        console.log('profile props', this.props)
        get(`http://localhost:3000/api/users/${this.props.match.params.id}`)
        .then(res => this.setState( {id: res.id, firstname: res.firstname, lastname: res.lastname, handle: res.handle, avatar: res.avatar, profileid: this.props.match.params.id} ))
        this.defaultAvi();
        me()
            .then(res => this.setState( {loggedId: res.id} ))
            .then(results => this.friendcheck(this.state.loggedId))
    }
    addFriend(){
        post('http://localhost:3000/api/relationships', {
            user_one_id: this.state.loggedId,
            user_two_id: this.state.profileid,
            status_interaction: 0,
        })
        this.setState({button: 'Requested'})
    }
    defaultAvi(){
        if(this.state.avatar === null) {
            this.setState({avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png'})
        } else {
            return;
        }
    }
    friendcheck(userone){
        post(`http://localhost:3000/api/relationships/friends/${this.props.match.params.id}`, {
                    userone: userone,
                })
                .then(res => this.setState({friendcheck: res}))
                .then(console.log('fc length check', this.state.friendcheck.length))
    }
    render() {
        if(isLoggedIn()){
            if(this.state.loggedId === this.state.id) {
                return (
                    <Fragment>
                        <LoggedBanner />
                            <Particles 
                                className={styles.bg} 
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
                            <div className={styles.wrapper}>
                                <ProfilePanel id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname} handle={this.state.handle} loggedAccount={true} avatar={this.state.avatar}/>
                                <UserPosts profileid={this.props.match.params.id}/>
                            </div>
                    </Fragment>
                )
            }else{
                if(this.state.friendcheck.length >= 1){
                    return(
                        <Fragment>
                            <LoggedBanner />
                            <Particles 
                                    className={styles.bg} 
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
                                <div className={styles.wrapper}>
                                    <ProfilePanel button={<button className={styles.button}>Your Friend</button>} id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname} handle={this.state.handle} loggedAccount={false} avatar={this.state.avatar}/>
                                    <UserPosts profileid={this.props.match.params.id}/>
                                </div>
                        </Fragment>
                    )
                } else {
                    return(
                        <Fragment>
                            <LoggedBanner />
                            <Particles 
                                    className={styles.bg} 
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
                                <div className={styles.wrapper}>
                                    <ProfilePanel button={<button className={styles.button} onClick={ () => { this.addFriend() } }>{this.state.button}</button>} id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname} handle={this.state.handle} loggedAccount={false} avatar={this.state.avatar}/>
                                    <UserPosts profileid={this.props.match.params.id}/>
                                </div>
                        </Fragment>
                    )
                }   
            }
        } else {
            return (
                <Fragment>
                    <UnloggedBanner />
                    <Particles 
                                className={styles.bg} 
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
                        <div className={styles.wrapper}>
                            <ProfilePanel id={this.state.id} firstname={this.state.firstname} lastname={this.state.lastname} handle={this.state.handle} loggedAccount={false} avatar={this.state.avatar}/>
                            <UserPosts profileid={this.props.match.params.id}/>
                        </div>
                </Fragment>
            )
        }
    }
}

export default Profile;

