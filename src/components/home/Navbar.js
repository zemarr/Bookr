import React, { Fragment } from 'react';
import hm from './home.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <nav className={hm.nav}>
                <Link to='/'>
                    <h4>Book-R</h4>
                </Link>
            </nav>
        </Fragment>
    )
}

export default Navbar;