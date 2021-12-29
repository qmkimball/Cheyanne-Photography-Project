import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="nav-wrapper">
               
                <div className="left-column">
                    <h1>Cheyanne Cave</h1>
                </div>
                
                <div className="right-column">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                        
                    <div className="nav-link-wrapper">
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/pricing">
                            Pricing
                        </NavLink>
                    </div>
                </div>

                

            </div>
        )
    }
}