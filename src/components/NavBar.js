import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const NavBar = React.createClass({
    render () {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <a className="nav-item">
                        <span className="select">
                            <select>
                                <option>Select Dropdown</option>
                                <option>With options</option>
                            </select>
                        </span>
                    </a>
                </div>
                NorthCodersNews
            </nav>
        );
    }
});

export default NavBar;