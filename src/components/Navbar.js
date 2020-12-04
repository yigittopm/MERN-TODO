import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
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

}