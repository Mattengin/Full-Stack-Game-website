import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import { get, post } from '../../services/base';
// import Post from './Post';
// import commentBox from './commentBox';
import CommentBox from './CommentBox';
import ForumTop from './ForumTop';
import LoggedBanner from '../LoggedBanner/LoggedBanner';


class Forumpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            forumText: '',
            id: ''
        }
    }

    componentDidMount(){
        get(`http://localhost:3000/api/forums/${this.props.match.params.id}`)
        .then(res => this.setState( { id: res.id, title: res.title, forumText: res.forumText  }))
    }
    render() {
        return (
            <Fragment>
                <LoggedBanner />

          <div className={ style.containment }>
              <ForumTop id={ this.state.id } title={ this.state.title } forumText={ this.state.forumText }/>
            
          </div>
          </Fragment>

         
        )
    }
}

export default Forumpage;