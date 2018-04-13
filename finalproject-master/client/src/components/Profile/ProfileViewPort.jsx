import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";

class ProfileViewPort extends Component {

    render() {
        return (
                    <div className={ styles.ProfileViewPort }>
                      
                        <div className={ styles.boxedDiv }></div>


                        
                    </div>

         
        )
    }
}

export default ProfileViewPort;