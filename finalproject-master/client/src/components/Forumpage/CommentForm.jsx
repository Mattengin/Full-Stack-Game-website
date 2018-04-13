import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import { get, post } from '../../services/base'
import LoggedBanner from '../LoggedBanner/LoggedBanner'

import { me } from "../../services/user";
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      commentText: '',
      userId: '',
      forumId: 0
    }

    // console.log("--Forum Id in the comment forms--", this.props.currentForumId);

  }

  componentDidMount(){
    console.log("--Forum Id in the comment forms--", this.props.currentForumId);
    me()
    .then((response) => {
      this.setState({userId: response.id, forumId: this.props.currentForumId});
    })
  }


  addComment(event){

    event.preventDefault();
   
      post('http://localhost:3000/api/forums/comment', {
          commentText: this.state.commentText,
          userId: this.state.userId,
          forumId: this.props.currentForumId,
      })
      
      // this.props.history.push("/forum");
      window.location.href = "http://localhost:3000/forum"
      // this.props.history.location.push("/forum");

      // this.props.updatecomment
  }


  handleComment(value) {
    this.setState({ 

      commentText: value,
});
      console.log("yes")
}


    render() {
      console.log("--rendering--", this.props.currentForumId, "--history--", this.context.location);
      // console.log("--rendering--", this.state.forumId);
        return (
          <div>
            <form>
                <label>
                <textarea className={style.text}  id="text" placeholder="COMMENT..."  onChange={(e) => this.handleComment(e.target.value)} />
                <input className={style.btnn} type="submit" onClick= { (event) => {this.addComment(event)}} />
                </label>
                
              </form> 
              
        </div>

         
        )
    }
}

export default CommentForm;