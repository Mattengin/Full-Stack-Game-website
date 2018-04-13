import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import CommentList from './CommentList';
import CommentForm from './CommentForm'

import LoggedBanner from '../LoggedBanner/LoggedBanner'


class CommentBox extends Component {
    constructor(props){
        super(props);
    }
    

    render() {

        console.log("--comment props--", this.props.commentList, "--Current Forum--", this.props.currentForumId);

        return (
            <div className={style.stick}>
          <div className={ style.space }>
              
         
              
              <CommentList commentz={this.props.commentList}/>
              <CommentForm currentForumId={this.props.currentForumId}/>
              </div>
        </div>

         
        )
    }
}

export default CommentBox;

