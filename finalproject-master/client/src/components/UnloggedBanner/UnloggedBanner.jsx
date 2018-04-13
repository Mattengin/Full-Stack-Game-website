import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import style from './UnloggedBanner.module.scss'

import AuthButton from '../auth/authButton';

class UnloggedBanner extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <Fragment>
            <div className={style.logged_out_banner}>
                <div className={style.logged_out_content}>
                    <nav className={`navbar navbar-expand-sm`}>
                        <div className="navbar-header">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/" className={`navbar-brand ${style.logo}`}> vidya </Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li className="yeet">
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/newuser" className={style.register}> Register </Link>
                            </li> */}
                            <li>
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/Forum" className={style.register}> Forums </Link>
                            </li>
                            <li className="yeet">
                            <AuthButton />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default UnloggedBanner;