import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './ForumPage.scss';
// import Post from './Post';
// import commentBox from './commentBox';

import LoggedBanner from '../LoggedBanner/LoggedBanner'
class EditComment extends Component {
    constructor(props){
        super(props)
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            <h5>To be updated</h5>
        
        </div>
        )
    }
}

export default EditComment;