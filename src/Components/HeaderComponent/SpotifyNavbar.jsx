import React, {  Fragment } from 'react'
import "./Spotify-navbar.css";
import  SpotifyLogo  from './LogoComponent/SpotifyLogo';
import SpotifyMenu from './MenuComponent/SpotifyMenu';
import {Link} from 'react-router-dom';
const SpotifyNavbar = () => {
    return (
        <Fragment>
            <section id = "spotifyNavbarBlock">
                 <article>
                <div className="logoBlock">
                    <Link to="/">
                        <SpotifyLogo />

                    </Link>
                </div>
                
                <div className="menuBlok">
                    <SpotifyMenu/>

                </div>
                </article>
            </section>
        </Fragment>
    );
};

export default SpotifyNavbar;
