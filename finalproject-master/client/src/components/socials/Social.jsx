import React, { Component } from 'react';
import SocialMap from './SocialMap';
import { get, post } from '../../services/base';
import { isLoggedIn, me } from '../../services/user';
import EditSocial from './EditSocial';


class Social extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socials: [],
            loggedOn: '',
            currentUserId: 0
        }
    }

    componentDidMount() {
        get(`http://localhost:3000/api/social/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({ socials: response, currentUserId: this.props.match.params.id })
        })
        me()
        .then((res) => {
            this.setState({ loogedOn: res.id })
        })
    }
    render() {
        return (
            <div>
                <SocialMap socials={ this.state.socials } currentUserId={ this.state.currentUserId }/>
            </div>
        );
    }
}
export default Social;