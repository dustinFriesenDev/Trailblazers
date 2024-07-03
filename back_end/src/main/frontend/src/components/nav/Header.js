import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
    const { isAuthenticated } = useAuth0();
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <Link to="/"><li className="navAnchor">Home</li></Link>
                    <Link to="/about"><li className="navAnchor">About</li></Link>
                    <Link to='/weather'><li className="navAnchor">Weather</li></Link>
                    <Link to='/animals'><li className="navAnchor">Animals</li></Link>
                    <Link to='/plants'><li className="navAnchor">Plants</li></Link>
                    <li className="navAnchor"><a href='http://discourse-trailblazer-forum.social' target="_blank">Forum</a></li>
                    {isAuthenticated && (
                        <>
                            <li><a  className="t-decoration" href='/trip'>Your Trips</a></li>
                            <li><a className="t-decoration" href='/profile'>Profile</a></li>
                        </>
                    )}
                    
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}