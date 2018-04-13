import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileViewPort from './ProfileViewPort';
import ProfileStatus from './ProfileStatus';
class ProfileNav extends Component {
    constructor(props) {
        super(props);

        this.state = {  conditionalComponent: false }
    }

   
    render() {
        // console.log(this.state);
        return (
            <Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Games </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Activity</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Friends</a>
                    </li>
                    <li className="nav-item navbar-right">
                        <a className="nav-link" href="#" onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                conditionalComponent: <ProfileStatus />
                            })
                            }} >Status</a>
                    </li>
                </ul>
            </nav>

            {this.state.conditionalComponent}
        </ Fragment>
        )
    }
}

export default ProfileNav;