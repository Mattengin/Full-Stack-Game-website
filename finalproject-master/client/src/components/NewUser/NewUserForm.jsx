import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';
import style from './NewUser.module.scss';
import { post } from '../../services/base'

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import Home from '../Home/Home';

class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            firstname: '',
            lastnamee: '',
            handle: '',
            email: '',
            password: '',
            passwordconf: '',
            feedbackMessage: '',
            newUserId: ""
        };
    }


    onButtonClick(event) {
        event.preventDefault(); 
            if (this.state.password === this.state.passwordconf) {
            post('http://localhost:3000/api/users', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            handle: this.state.handle,
            email: this.state.email,
            password: this.state.password,
            avatar: 'http://www.prospanica.org/resource/group/ce7fae39-c383-4635-b6d0-9169e72950c6/profile-placeholder.png'
            })
            .then((results) => {
                console.log('worked maybe', results);
                this.login(results.id);
                // this.props.history.push(`/profile/:${results.id}`);
                // window.location.href = `http://localhost:3000/add/social/${results.id}`
            })
        } else {
            alert('passwords don\'t match fam')
        }
    }
    handleFirstNameChange(value) {
        this.setState({ firstname: value})
    }
    handleLastNameChange(value) {
        this.setState({ lastname: value})
    }
    
    handleHandleChange(value) {
        this.setState({ handle: value });
    }
    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }
    handlePasswordConfChange(value) {
        this.setState({ passwordconf: value });
    }

    login(newUserId) {
        // e.preventDefault();
        console.log('--what--');
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true, newUserId });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (
                <Redirect to={`/add/social/${this.state.newUserId}`} />
            );
        } 

       return (
            <Fragment>
                    <div className={style.form}>
                    <form>
                        <div className="form-group">
                            <input id="firstname" className={style.inputName} style={{marginRight: "3%"}} type="text" placeholder="First Name" onChange={(e) => this.handleFirstNameChange(e.target.value)} required />
                            <input id="lastname" className={style.inputName}  type="text" placeholder="Last Name" onChange={(e) => this.handleLastNameChange(e.target.value)} required />  
                        </div>
                        <div className="form-group">
                            <input id="handle" className={style.input} type="text" placeholder="Username" onChange={(e) => this.handleHandleChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <input id="email" className={style.input} type="email" placeholder="Email" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <input id="password" className={style.input} type="password" placeholder="Password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input id="passwordconf" className={style.input} type="password" placeholder="Confirm Password" onChange={(e) => this.handlePasswordConfChange(e.target.value)} required /> 
                        </div>
                        <button onClick= { (event) => this.onButtonClick(event)} value="Login" className="btn btn-success" >Submit</button>
                    </form>
                </div>
            </Fragment>
       );
    }
}
// style={{width: '10em'}}
// style={{width: '10em', marginLeft: '1em'}}
export default NewUserForm;