import React, { Fragment } from "react";

import { PacmanLoader } from "react-spinners";
import Styles from "./LoadingViewContainer.module.scss";

function LoadingViewContainer(props){

    // let loadingText = props.loading ? <h1>Loading...</h1> : null;
    let loadingModal = props.loading ? (
        <div className={`${Styles.loadingPanel}`}>
            <div className={`sweet-loading ${Styles.ringLoader}`}>

                <div className={`${Styles.loaderContainer}`}>
                    <PacmanLoader
                        color={'#fdff00'} 
                        loading={props.loading} 
                    />
                </div>
                

                <h1>Loading...</h1>

            </div>
        </div>
    ) : null;

    return(
        loadingModal
    );
}

export default LoadingViewContainer;