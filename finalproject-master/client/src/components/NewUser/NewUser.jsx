import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';
import style from './NewUser.module.scss';
import { post } from '../../services/base'


import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import Home from '../Home/Home';

class NewUser extends Component {
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
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }


    onButtonClick(event) {
        event.preventDefault();
        console.log("Clicking");

            if (this.state.password === this.state.passwordconf) {
                post('http://localhost:3000/api/users', {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                handle: this.state.handle,
                email: this.state.email,
                password: this.state.password,
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/1024px-Circle-icons-profle.svg.png"
            })
            .then((results) => {
                console.log('worked maybe')
                // this.props.history.location(`/`);
                this.login(e)
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

    login(e) {
        // e.preventDefault();
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }
    render() {
    
    //    const { from } = this.props.location.state || { from: { pathname: '/' } };
    //    const { redirectToReferrer } = this.state;

    //    if (redirectToReferrer) {
    //        return (
    //            <Redirect to={from} />
    //        );
    //    }

       return (
            <Fragment>
                <UnloggedBanner />
                    <div className={style.form}>
                    <h1> Create an Account</h1>
                    <div>
                        <div className="form-group">
                            <input id="firstname" className={style.input} type="text" placeholder="First Name" onChange={(e) => this.handleFirstNameChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <input id="lastname" className={style.input} type="text" placeholder="Last Name" onChange={(e) => this.handleLastNameChange(e.target.value)} required /> 
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
                        <button onClick= { (event) => this.onButtonClick(event)} value="Login" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </Fragment>
       );
    }
}

export default NewUser;