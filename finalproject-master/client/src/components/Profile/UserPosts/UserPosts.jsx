import React, { Component, Fragment } from 'react';
import style from './UserPosts.module.scss'
import { get, post } from '../../../services/base'
import { Link } from 'react-router-dom';
import LikeButton from '../../Post/LikeButton'
import { me, isLoggedIn } from '../../../services/user';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loggedId: this.props.loggedId,
            profileid: this.props.profileid,
            ft: [false, true]
        }
    }
    componentDidMount(){
        if(isLoggedIn()){
            me()
            .then(res => { 
                this.userId = res.id;
                post(`http://localhost:3000/api/status/${this.props.profileid}`, {
                    id: res.id
                })
                .then((statuses) => {
                    console.log('statuses by user', statuses);
                    this.setState({posts: statuses});
                })
                .catch((err) => {
                    console.error(err);
                });
            })
        } else {
                post(`http://localhost:3000/api/status/${this.props.profileid}`, {
                    id: -1
                })
                .then((statuses) => {
                    console.log('statuses by user', statuses);
                    this.setState({posts: statuses});
                })
                .catch((err) => {
                    console.error(err);
                });
            }
        }
    render(){
        let posts = this.state.posts.map((posts) => {
            return(
                    <div className={`media ${style.postDiv}`}key={posts.id}>
                        <div className="media-left">
                            <img src={posts.avatar} className={`media-object ${style.avatar}`} style={{width: '50px'}} />
                        </div>
                        <div className="media-body">
                            <Link to={`/profile/${posts.userid}`} className="media-heading">{posts.handle}</Link>
                            <p>{posts.status}</p>
                            <LikeButton liked={this.state.ft[posts.liked]} statusid={posts.id} userid={this.state.loggedId}/>
                        </div>
                    </div>
            )
        }).reverse()
        return(
            <div className={style.allpost}>
                { posts }
            </div>
        )
    }
}

export default Post;