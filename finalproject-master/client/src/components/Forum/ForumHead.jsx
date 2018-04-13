import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './Forum.module.scss'

class Forum extends Component {

    render() {
        return (
    
            
        
            <div className={ `${style.spaceCards} carousel slide` } id="carouselExampleIndicators" data-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className={ `${style.forumhead} d-block w-100` } src="http://cdn.makeuseof.com/wp-content/uploads/2017/06/xbox-one-x-s-670x335.jpg?x59455" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMTAvcGRwX2ZlYXR1cmVfMDZfMTI4MC02NzB4MzM1XzI5OTYyNTE0NzY5NjgzNjQuanBn" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://cdn.makeuseof.com/wp-content/uploads/2017/12/nintendo-switch-3ds-670x335.jpg" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>This is one of the top 3 post</h5>
                <p>Top post content</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
       
         
        )
    }
}

export default Forum;