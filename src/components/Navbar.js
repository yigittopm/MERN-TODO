import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item navbar-brand">
                    <Link className="nav-link" to="/create">
                        Create Todo
                    </Link>
                </li>
                <li className="navbar-item navbar-brand">
                    <Link className="nav-link" to="/show">
                        Show Todo
                    </Link>
                </li>
            </ul>
        </nav>
    )
}