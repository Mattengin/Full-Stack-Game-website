import React, { Fragment } from "react";

function CarouselIndicators(props) {

    return(
        <Fragment>
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        </Fragment>
    );

}

export default CarouselIndicators;