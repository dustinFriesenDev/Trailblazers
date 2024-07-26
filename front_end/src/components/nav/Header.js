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
                    <li><Link to='/' className="btnLink">Home</Link></li>
                    <li><Link to='/about' className="btnLink">About</Link></li>
                    <li><Link to='/weather' className="btnLink">Weather</Link></li>
                    <li><Link to='/animals' className="btnLink">Animals</Link></li>
                    <li><Link to='/plants' className="btnLink">Plants</Link></li>
                    <li><Link to='http://discourse-trailblazer-forum.social' target="_blank" className="btnLink">Forum</Link></li>
                    {isAuthenticated && (
                        <>
                            <li><Link  className="t-decoration" to='/trip'>Your Trips</Link></li>
                            <li><Link className="t-decoration" to='/profile'>Profile</Link></li>
                        </>
                    )}
                    
                </ul>
            </nav>
        </header>
    )
}