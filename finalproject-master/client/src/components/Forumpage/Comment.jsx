import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
import EditComment from './EditComment';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentz: [],
        }
    }
    
    componentDidMount(){
        get('http://localhost:3000/api/forums/51?getForumComments=true')
        .then(result => this.setState({commentz: result}))
        .then(log => console.log(this.state.commentz))
      }



    render() {
        let commentz = this.state.commentz.map((commentz) => {
            return(
                <section id="comments">
                <div className="comment">
                  <div className="username">{commentz.handle}</div>
                  <img src="https://www.une.edu.au/__data/assets/image/0005/97178/blank-avatar.png" class="avatar" alt="user image" />
                    <p>{commentz.comment}</p>
                </div>
              </section>
            )
          })
        return (
  

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


         
        )
    }
}

export default Comment;