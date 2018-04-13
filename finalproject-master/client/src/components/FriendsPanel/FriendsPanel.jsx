import React, { Component, Fragment } from 'react';
import style from './FriendsPanel.module.scss';
import { post } from '../../services/base';
import { isLoggedIn, me } from '../../services/user';
import ToggleDisplay from 'react-toggle-display';

class FriendsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedId: '',
            friends: [],
            show: false,
        }
    }
    componentDidMount(){
        me()
        .then(res => { 
            this.setState({ loggedId: res.id});
            return post('http://localhost:3000/api/relationships/friends', {
                id: res.id
            })
            .then(res => this.setState({friends: res}))
        })
    }
    onFriendsButtonClick(){
        if(this.state.show === false){
            this.setState({show: true})
        } else{
            this.setState({show: false})
        }
    }
    render(){
        let friends = this.state.friends.map((friend) => {
            if(friend.user_one_id === this.state.loggedId){
            return(
                <li className={style.list}key={friend.id} >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png' style={{width: '35px'}} alt="yeet"/>    
                    <p className={style.friendname}>UserID {friend.user_two_id}</p>
                </li>
            )
        } else{
            return(
                <li className={style.list} key={friend.id} >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png' style={{width: '35px'}} alt="yeet"/>    
                    <p className={style.friendname}>UserID {friend.user_one_id}</p>
                </li>
            )
        }
        })
        return(
            <Fragment>
            <div className={`${style.position}`}>
                <ToggleDisplay show={this.state.show}> 
                <ul className={style.nobullet}>      
                    { friends }
                </ul>
                </ToggleDisplay>
                <button onClick= { (event) => this.onFriendsButtonClick()} className={style.friendsButton}> Friends </button>
            </div>
            </Fragment>
        )
    }
}

export default FriendsPanel;