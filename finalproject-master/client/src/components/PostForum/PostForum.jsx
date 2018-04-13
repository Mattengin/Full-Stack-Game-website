import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.module.scss'
import imageUploader from './imageUploaderBox'
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import { get, post } from '../../services/base';
import Particles from 'react-particles-js';
import styles from './postForum.module.scss'
class PostForum extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        forumText: '',
        id: '',
        forumImg: null
    };

}

onButtonClick(event) {
  event.preventDefault();

  console.log('--on click--', this.state.id, this.state.title, this.state.forumText);

    post('http://localhost:3000/api/forums/forum', {
        forumTitle: this.state.title,
        forumImg: this.state.forumImg,
        forumText: this.state.forumText,
        creatorId: 0
    })
    this.props.updateforums;
    console.log("yes")
    window.location.href = `http://localhost:3000/forum`
}

handleTextChange(value) {
    this.setState({ 
      title: value,
});
      console.log("yes")
}

handleTextChangeTwo(value) {
  this.setState({ 
    forumText: value});
    console.log("yes")
}

  render() {
    return (
      // <form>
      //   <input type="text" placeholder="title"  onChange={(e) => this.handleTextChange(e.target.value)}/>
      //   <textarea id="text" placeholder="forumText"  onChange={(e) => this.handleTextChangeTwo(e.target.value)} />
      //   <input type="submit" onClick= { (event) => {this.onButtonClick(event)}} />
      // </form>

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
<div  id="formwrap">
    <form  method="post" className={style.holdsPost} >
      
        <p>

     
          <span className={style.flat}>
            
            <input type="text" placeholder="Title" className={style.indent} onChange={(e) => this.handleTextChange(e.target.value)}  />
      
              
           
          </span>
          <span className={ style.Message }>
            <textarea onChange={(e) => this.handleTextChangeTwo(e.target.value)}  className={ style.posting } placeholder="..."></textarea>
          </span>
          <input type="submit"  className={style.btnn} onClick= { (event) => {this.onButtonClick(event)}} />
       
      </p>
      <div className=" wpcf7-display-none">
      </div>
  </form>
</div>
</Fragment>
    );
  }
        
    
}

export default PostForum;