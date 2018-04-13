import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from "./ProfileCard.scss";
import ProfileViewPort from './ProfileViewPort';
class ProfileStatus extends Component {

    render() {
        return (
            <Fragment className="input-group mb-3">
                <Fragment className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </Fragment>
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                <h5>To be updated</h5>
            
            </Fragment>

         
        )
    }
}

export default ProfileStatus;