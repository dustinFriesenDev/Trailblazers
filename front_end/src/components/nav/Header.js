import React from "react";
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

export default function Header() {
    const { isAuthenticated } = useAuth0();
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <Link className="anchor-link" to="/">Home</Link>
                    <Link className="anchor-link" to="/about">About</Link>
                    <Link className="anchor-link" to="/weather">Weather</Link>
                    <Link className="anchor-link" to="/animals">Animals</Link>
                    <Link className="anchor-link" to="/plants">Plants</Link>
                    <li><a href='http://discourse-trailblazer-forum.social' target="_blank">Forum</a></li>
                    {isAuthenticated && (
                        <>
                            <Link to="/trips" className="t-decoration">Your Trips</Link>
                            <Link to="" className="t-decoration">Profile</Link>
                        </>
                    )}
                    
                </ul>
            </nav>
        </header>
    )
}