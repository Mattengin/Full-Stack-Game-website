import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './Forum.module.scss'

class Forum extends Component {

    constructor(props) {
        super(props)
        this.topFunction = this.topFunction.bind(this);
    }


topFunction() {
    window.scrollTo(0,0)
};

    render() {
        return (
       
         <button className={ style.Scroll } onClick= {this.topFunction}><i className="ion-chevron-up"></i></button>
        )
    }
}

export default Forum;

