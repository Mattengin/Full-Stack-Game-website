import React, { Fragment } from 'react';
import SocialLayout from './SocialLayout';

function SocialMap(props) {
    const socialMedia = props.socials.map((results, index) => {
        return (
            <div key={ index }>
                <SocialLayout social={ results } currentUserId={props.currentUserId} />
            </div>
        );
    })
    return (
        <Fragment>
            { socialMedia }
        </Fragment>
    );
}

export default SocialMap;