import React, { Component } from 'react';
import { get, post, destroy } from '../../services/base'
import style from './Post.module.scss'

class LikeButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        liked: this.props.liked,
        likesarray: [],
        likes: '',
      };
      this.handleLike = this.handleLike.bind(this);
      this.handleUnlike = this.handleUnlike.bind(this);
    } 

    componentDidMount(){
        get(`http://localhost:3000/api/likes/${this.props.statusid}`)
        .then(res => this.setState({likesarray: res, likes: res.length}))
    }
    handleLike() {
      this.setState({
        liked: !this.state.liked,
        likes: this.state.likes + 1
      });
      post('http://localhost:3000/api/likes', {
                statusid: this.props.statusid,
                userid: this.props.userid,
            });
        
    }
    
    handleUnlike(){
        this.setState({
            liked: !this.state.liked,
            likes: this.state.likes - 1
        });
        destroy(`http://localhost:3000/api/likes/`, {
            statusid: this.props.statusid,
            userid: this.props.userid,
        })
    }
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
        if(this.state.liked === false) {
            return (
                <div className="customContainer">
                <i className={`glyphicon glyphicon-heart-empty ${style.LikeButton}`} onClick={this.handleLike}></i><p style={{display: 'inline', padding: '.5em'}}>{this.state.likes}</p>
                </div>
            );
        } else {
            return (
                <div className="customContainer">
                <i className={`glyphicon glyphicon-heart ${style.LikedButton}`} onClick={this.handleUnlike}></i><p style={{display: 'inline', padding: '.5em'}}>{this.state.likes}</p>
                </div>
            );
        }
    }

}

export default LikeButton;