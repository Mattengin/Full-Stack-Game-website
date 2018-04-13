import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { get, post } from '../../services/base'
import style from './Forum.module.scss'
import styles from './Forum.module.scss'
import ForumHead from './ForumHead';
import Scroll from './scroll';
import LoggedBanner from '../LoggedBanner/LoggedBanner'
import ForumList from './ForumList'
import CommentBox from '../Forumpage/CommentBox';
import Particles from 'react-particles-js';
class Forum extends Component {
  constructor(props){
    super(props);

    this.state = {
      commentList: [],
      currentForumId: 0
    }


    this.onForumClick = this.onForumClick.bind(this); 
  }

  onForumClick(event, forumId){
    event.preventDefault();
    // let commentList = []
    get(`http://localhost:3000/api/forums/${forumId}?getForumComments=true`)
    .then((response) =>{
      // console.log("--response--", response);
      // this.setState( {
      //       id:response.id, 
      //       newcomment: response.newcomment, 
      //       commentid: response.commentid
      //     })
      this.setState({commentList: [...response], currentForumId: forumId})
    })
    .catch((err) => {
      console.log(err);
    })
  }

    

    render() {
      // console.log("--comment lists--", this.state.commentList);
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
            <div className={style.commentStyle}>
            <CommentBox commentList={this.state.commentList} currentForumId={this.state.currentForumId} />
            </div>
            <div className={style.forumStyle}>
              <ForumList handleClick={this.onForumClick} />
            </div>
          <Scroll />
        

          
            </Fragment>

         
        )
    }
}

export default Forum;