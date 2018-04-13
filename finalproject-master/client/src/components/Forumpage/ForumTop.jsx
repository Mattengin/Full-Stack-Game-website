import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';

import LoggedBanner from '../LoggedBanner/LoggedBanner'
class ForumTop extends Component {

    render() {
        return (
        <Fragment>
            <img className={ style.userImage } src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png" alt="profile image" />
        <div className={ style.post }>
          <h1>{this.props.title}</h1>
          <hr />
            <p>{this.props.forumText}</p>
        </div>
        </Fragment>
         
        )
    }
}

export default ForumTop;