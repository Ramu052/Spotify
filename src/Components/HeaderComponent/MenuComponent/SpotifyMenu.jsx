import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

 const SpotifyMenu = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to="/">Premium</Link></li>
                    <li><Link to="/">Support</Link></li>
                    <li><Link to="/">Download</Link></li>
 
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/signin">Login</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SpotifyMenu;
