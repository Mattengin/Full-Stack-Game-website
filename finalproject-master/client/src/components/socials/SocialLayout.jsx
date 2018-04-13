import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import style from './social.module.scss';
import Particles from 'react-particles-js';

function SocialLayout(props) {
    return (
        <ListGroup className={ style.socialTable }>
        <h1 className={ style.headingSocial }>follow me</h1>
            <ListGroupItem><i className="ion-social-twitter"></i> <span className={style.spacingTwitter}>{ props.social.twitter }</span></ListGroupItem>
            <ListGroupItem ><i className="ion-social-instagram-outline"></i> <span className={ style.spacingInsta }> { props.social.instagram }</span></ListGroupItem>
            <ListGroupItem><i className="ion-social-twitch"></i> <span className={ style.spacingTwitch }> { props.social.twitch }</span></ListGroupItem>
            <ListGroupItem><i className="ion-social-youtube"></i> <span className={ style.spacingTube }> { props.social.youtube }</span></ListGroupItem>
            <Particles 
                className={style.bgtwo} 
                width="100%" height="100%" 
                params={ {
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "whitesmoke",
                                blur: 5,
                            }
                        },
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1200
                            }
                        }
                    }
                } } 
            />
        </ListGroup>
        );
}


export default SocialLayout;