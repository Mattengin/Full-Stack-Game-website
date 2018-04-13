import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';
import Comment from './Comment';
import LoggedBanner from '../LoggedBanner/LoggedBanner'


class CommentList extends Component {
  constructor(props){
    super(props);
  }
    //     constructor(props) {
    //     super(props)
    //     this.state = {
    //        commentid: '',
    //        comment: '',
    //        handle: '',

    //     }
    // }
    // componentDidMount(){
    //     get(`http://localhost:3000/api/forums/${this.props.match.params.id}'`)
    //     // get('http://localhost:3000/api/forums/51?getForumComments=true')
    //     .then(res => this.setState( {commentid: this.state} ))
    //   }

    render() {
      let commentz = this.props.commentz.map((commentz) => {
        console.log("--the comments--", commentz);
                return(
                    <section id="comments">
                    <div className="comment">
                      <div className="username">{commentz.handle}</div>
                      <img src={commentz.avatar ? commentz.avatar : "https://www.une.edu.au/__data/assets/image/0005/97178/blank-avatar.png"} class="avatar" alt="user image" />
                        <p>{commentz.comment}</p>
                    </div>
                  </section>
                )
              })

          return (
            <div className="commentList">
              {/* <Comment />             */}
              <div className="card w-75" >
                <div className="card-body">
                  
                  { commentz }

                  {/* <i onClick={(event) => {
                                            event.preventDefault()

                                            this.setState({
                                                edit: <EditComment />
                                            })
                                            }} className="ion-wrench"></i> */}
                </div>
                </div>
            </div>
          );
        }
      };

export default CommentList;