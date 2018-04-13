import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { get, post } from '../../services/base'
import style from './Forum.module.scss'
import {Accordion, PanelGroup, Panel} from 'react-bootstrap';
import CommentBox from '../Forumpage/CommentBox'
import comment from '../Forumpage/Comment'
class ForumList extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '',
      forumz: [],
      id: '',
      newcomment:'',
      commentid: '',
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }
  

    componentDidMount(){
      get('http://localhost:3000/api/forums')
      .then(result => 
        {
          console.log("--result--", result);
          this.setState({forumz: result})
        }
      )
      .then(log => console.log(this.state.forumz))
    }

// getComment(event, forumId){
//   event.preventDefault();
//   get(`http://localhost:3000/api/forums/${forumId}?getForumComments=true`)
//   .then((response) =>{
//     console.log("--response--", response);
//     this.setState( {
//           id:response.id, 
//           newcomment: response.newcomment, 
//           commentid: response.commentid
//         })
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   // .then( res => this.setState( {
//   //     id:res.id, newcomment: res.newcomment, commentid: res.commentid
//   //   }))
//   //   .catch((err) => {
//   //     console.log(err);
//   //   })

// }    

    render() {
      let forumz = this.state.forumz.map((forumz) => {
        return(

            <Fragment >
              <PanelGroup
                      accordion
                      id="accordion-controlled-example"
                      activeKey={this.state.activeKey}
                      onSelect={this.handleSelect}
                    >
                    <Panel eventKey={forumz.id}
                    key={forumz.id}
                  
                    >
                    {/* this.getComment(event, forumz.id) */}
                      <Panel.Heading >
                        <Panel.Title  onClick= { (event) => {this.props.handleClick(event, forumz.id)}} toggle> <img className={`img-rounded ${style.imgPlaceholder}`} src={forumz.forumImg ? forumz.forumImg : "https://www.une.edu.au/__data/assets/image/0005/97178/blank-avatar.png"} alt="" srcset=""/> <span className={`${style.styleText}`}>{forumz.title}</span> </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>{forumz.forumText}</Panel.Body>
                      
                    </Panel>
                    
                  </PanelGroup>
            </Fragment>




        )
      })
        return (
          <Fragment >
              { forumz }
            </Fragment>

         
        )
    }
}

export default ForumList;