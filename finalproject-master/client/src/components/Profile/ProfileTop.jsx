import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileNav from './ProfileNav';
import ProfileView from './ProfileView';
import ProfileViewPort from './ProfileViewPort';


class profilePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socialLink: ''
    }
}
    render() {


      if(this.props.loggedAccount === true) {
        return (
          <div className={`${styles.profilePanel}`}>
            <Link to={ `/edit/${ this.props.id }` }><i className="ion-edit"></i></Link>
            <Link to={ `/social/${ this.props.id }`}><i className="ion-android-share-alt"></i></Link>
            <div className={`${styles.profileImage} ${styles.clickable}`} src={this.props.avatar} alt="sample47" style={{width: '13em', height: '13em', borderRadius: '50%', backgroundImage: `url(${this.props.avatar})`}} />
            <h3>{this.props.firstname} {this.props.lastname} </h3>
            <h4> @{this.props.handle} </h4>
          </div>
        )
      } else {
        return (
          <div className={`${styles.profilePanel}`}>
            <Link to={ `/social/${ this.props.id }`}><i className="ion-android-share-alt"></i></Link>
            <div className={`${styles.profileImage}`} src={this.props.avatar} alt="sample47" style={{width: '13em', height: '13em', borderRadius: '50%', backgroundImage: `url(${this.props.avatar})`}} />
            <h3>{this.props.firstname} {this.props.lastname} </h3>
            <h4> @{this.props.handle} </h4>
            {this.props.button}
          </div>
        )
      }
    }
}

export default profilePanel;