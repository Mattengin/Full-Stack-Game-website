import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import style from './Home.module.scss';
import { isLoggedIn, me } from '../../services/user';
import { get } from '../../services/base';

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import ForumCarousel from '../ForumCarousel/ForumCarousel';
import NewUserForm from '../NewUser/NewUserForm';
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import FriendsPanel from '../FriendsPanel/FriendsPanel';
import Particles from 'react-particles-js';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            handle: '',
            firstname: '',
            avatar: '',
        }
    }
    componentDidMount(){
        if(isLoggedIn()){
            me()
            .then((res) => {
                this.setState({id: res.id, handle: res.handle, firstname: res.firstname, avatar: res.avatar});
            })
        }
    }
    render() {
        if(isLoggedIn()) {
            return (
                <Fragment>
                <LoggedBanner id={this.state.id} handle={this.state.handle} firstname={this.state.firstname} />
                <Post loggedId={this.state.id}/>
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
            )
        } 
        return (
            <Fragment>
            <UnloggedBanner />
                <div className={style.homeBody}>
                <div className={style.homeBanner}>
                </div>
                    <div className="col-sm-12" className={style.rightsquare}>
                        <h1>Join us.</h1>
                        <NewUserForm />
                    </div>
                </div>  
                <Particles 
                    className={style.gg} 
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
        )
    }
}

export default Home;