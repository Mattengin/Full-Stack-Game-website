import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";

class ProfileView extends Component {

    render() {
        return (
                    <div className={ styles.Profileview }>
                        <div>
                            <h4> Known As.. </h4>
                         <div>
                            <a href="#">DAnkBank #PS4</a>
                            <a href="#">Herobrine #xbone</a>
                            <a href="#">Gabe Newell #steam</a>
                            <a href="#">Sold out #nintendo</a>
                        </div>

                        </div>
                       
                    </div>

         
        )
    }
}

export default ProfileView;